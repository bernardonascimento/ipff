import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";
import { emailConfirmacao } from "@/lib/purples-email";

/**
 * Recebe as inscrições do evento Purples: grava na planilha do Google via
 * webhook do Apps Script (PURPLES_SHEETS_WEBHOOK_URL) e envia um e-mail de
 * confirmação via Resend (RESEND_API_KEY + PURPLES_FROM_EMAIL). O e-mail é
 * best-effort: se falhar, a inscrição continua confirmada.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Envia o e-mail de confirmação (não lança — apenas registra falhas). */
async function enviarEmailConfirmacao(dados: {
  nome: string;
  email: string;
  quantidade: number;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.PURPLES_FROM_EMAIL;
  if (!apiKey || !from) {
    console.warn(
      "RESEND_API_KEY/PURPLES_FROM_EMAIL ausentes — e-mail de confirmação não enviado.",
    );
    return;
  }
  try {
    const { event } = siteConfig.purples;
    const { subject, html, text } = emailConfirmacao({
      nome: dados.nome,
      quantidade: dados.quantidade,
      date: event.date,
      time: event.time,
      venue: event.venue,
      city: event.city,
    });
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [dados.email],
      subject,
      html,
      text,
    });
    if (error) console.error("Resend retornou erro:", error);
  } catch (erro) {
    console.error("Falha ao enviar e-mail de confirmação:", erro);
  }
}

export async function POST(req: Request) {
  let corpo: unknown;
  try {
    corpo = await req.json();
  } catch {
    return NextResponse.json({ error: "json_invalido" }, { status: 400 });
  }

  const dados = corpo as Record<string, unknown>;
  const nome = String(dados.nome ?? "").trim();
  const email = String(dados.email ?? "").trim();
  const celular = String(dados.celular ?? "").trim();
  const quantidade = Number(dados.quantidade ?? 0);

  const celularDigitos = celular.replace(/\D/g, "").length;
  const valido =
    nome.length >= 2 &&
    EMAIL_RE.test(email) &&
    celularDigitos >= 10 &&
    Number.isInteger(quantidade) &&
    quantidade >= 1 &&
    quantidade <= 20;

  if (!valido) {
    return NextResponse.json({ error: "dados_invalidos" }, { status: 422 });
  }

  const webhook = process.env.PURPLES_SHEETS_WEBHOOK_URL;
  if (!webhook) {
    console.error(
      "PURPLES_SHEETS_WEBHOOK_URL não configurada — inscrição não gravada.",
    );
    return NextResponse.json({ error: "nao_configurado" }, { status: 500 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        evento: "Purples em Franca",
        nome,
        email,
        celular,
        quantidade,
        data: new Date().toISOString(),
      }),
    });
    if (!res.ok) throw new Error(`webhook respondeu ${res.status}`);
  } catch (erro) {
    console.error("Falha ao gravar inscrição na planilha:", erro);
    return NextResponse.json({ error: "falha_gravacao" }, { status: 502 });
  }

  // Inscrição gravada — envia a confirmação por e-mail (best-effort).
  await enviarEmailConfirmacao({ nome, email, quantidade });

  return NextResponse.json({ ok: true });
}
