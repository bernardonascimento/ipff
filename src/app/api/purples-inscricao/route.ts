import { NextResponse } from "next/server";

/**
 * Recebe as inscrições do evento Purples e as encaminha para a planilha do
 * Google via webhook do Apps Script (URL em PURPLES_SHEETS_WEBHOOK_URL — fica
 * no servidor, nunca exposta ao cliente). Valida os dados antes de gravar.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  return NextResponse.json({ ok: true });
}
