"use client";

import { useRef, useState } from "react";
import { Loader2, Check, Ticket } from "lucide-react";

/**
 * Formulário de inscrição gratuita do evento. Envia os dados para
 * /api/purples-inscricao, que grava numa planilha do Google (via webhook
 * do Apps Script). Máscara de celular e seleção de 1 a 20 ingressos.
 */

/** Aplica a máscara (99) 99999-9999 sobre os dígitos digitados. */
function mascaraCelular(valor: string): string {
  const d = valor.replace(/\D/g, "").slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const QUANTIDADES = Array.from({ length: 20 }, (_, i) => i + 1);

type Estado = "idle" | "enviando" | "ok" | "erro";

const inputBase =
  "w-full rounded-xl border border-[var(--pp-border)] bg-[var(--pp-surface-2)] px-4 py-3 text-[var(--pp-fg)] placeholder:text-white/35 outline-none transition-colors focus:border-[var(--pp-magenta)] focus:ring-2 focus:ring-[color:var(--pp-magenta)]/40";
const labelBase =
  "font-display mb-1.5 block text-sm font-semibold text-white/85";

export function PurplesForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [estado, setEstado] = useState<Estado>("idle");
  const [avisoAberto, setAvisoAberto] = useState(false);
  const avisoTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const nomeValido = nome.trim().length >= 2;
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const celularValido = celular.replace(/\D/g, "").length >= 10;
  const emailInvalido = email.length > 0 && !emailValido;
  const formValido = nomeValido && emailValido && celularValido;

  async function aoEnviar(e: React.FormEvent) {
    e.preventDefault();
    if (estado === "enviando") return;
    // Clicou com dados faltando → mostra o aviso em vez de enviar.
    if (!formValido) {
      setAvisoAberto(true);
      clearTimeout(avisoTimer.current);
      avisoTimer.current = setTimeout(() => setAvisoAberto(false), 2000);
      return;
    }
    setEstado("enviando");
    try {
      const res = await fetch("/api/purples-inscricao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, celular, quantidade }),
      });
      if (!res.ok) throw new Error("Falha no envio");
      setEstado("ok");
    } catch {
      setEstado("erro");
    }
  }

  if (estado === "ok") {
    return (
      <div className="flex min-h-[520px] flex-col items-center justify-center rounded-2xl border border-[var(--pp-border)] bg-[var(--pp-surface)] p-8 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-[linear-gradient(100deg,var(--pp-violet),var(--pp-magenta),var(--pp-coral))]">
          <Check className="size-7 text-white" />
        </span>
        <h3 className="font-display mt-5 text-2xl font-bold text-white">
          Inscrição confirmada!
        </h3>
        <p className="mt-2 max-w-xs text-white/70">
          Seu lugar está garantido, {nome.split(" ")[0]}. Nos vemos no show da
          Purples em Franca!
        </p>
        <span className="pp-chip-ring relative mt-6 inline-flex rounded-full p-[1.5px] shadow-[0_0_22px_-4px_var(--pp-magenta)]">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-[rgba(12,10,18,0.92)] px-5 py-2.5 backdrop-blur-sm">
            <Ticket className="size-5 text-[var(--pp-magenta)]" />
            <span className="font-display text-base font-semibold text-white">
              {quantidade}{" "}
              {quantidade === 1 ? "ingresso garantido" : "ingressos garantidos"}
            </span>
          </span>
        </span>
      </div>
    );
  }

  return (
    <form
      onSubmit={aoEnviar}
      noValidate
      className="relative overflow-hidden rounded-2xl border border-[var(--pp-border)] bg-[var(--pp-surface)] p-6 shadow-2xl shadow-black/40 sm:p-8"
    >
      {/* Tarja diagonal de destaque — evento gratuito */}
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -right-[52px] top-[26px] w-[200px] rotate-45 bg-[linear-gradient(100deg,var(--pp-violet),var(--pp-magenta),var(--pp-coral))] py-1.5 text-center text-xs font-extrabold uppercase tracking-[0.25em] text-white shadow-lg shadow-black/30"
      >
        Grátis
      </span>

      <h3 className="font-display text-2xl font-bold text-white">
        Garanta seu ingresso
      </h3>
      <p className="mt-1 text-sm text-white/60">
        É gratuito. Preencha os dados e confirme sua presença.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="pp-nome" className={labelBase}>
            Nome completo
          </label>
          <input
            id="pp-nome"
            type="text"
            required
            autoComplete="name"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            className={inputBase}
          />
        </div>

        <div>
          <label htmlFor="pp-email" className={labelBase}>
            E-mail
          </label>
          <input
            id="pp-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="voce@email.com"
            aria-invalid={emailInvalido}
            className={`${inputBase} ${emailInvalido ? "border-[var(--pp-coral)] focus:border-[var(--pp-coral)] focus:ring-[color:var(--pp-coral)]/40" : ""}`}
          />
          {emailInvalido && (
            <p className="mt-1.5 text-xs text-[var(--pp-coral)]">
              Informe um e-mail válido.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="pp-celular" className={labelBase}>
              Celular
            </label>
            <input
              id="pp-celular"
              type="tel"
              inputMode="numeric"
              required
              autoComplete="tel"
              value={celular}
              onChange={(e) => setCelular(mascaraCelular(e.target.value))}
              placeholder="(16) 99999-9999"
              className={inputBase}
            />
          </div>

          <div>
            <label htmlFor="pp-quantidade" className={labelBase}>
              Ingressos
            </label>
            <select
              id="pp-quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(Number(e.target.value))}
              className={inputBase}
            >
              {QUANTIDADES.map((n) => (
                <option key={n} value={n} className="bg-[var(--pp-surface-2)]">
                  {n} {n === 1 ? "ingresso" : "ingressos"}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {estado === "erro" && (
        <p
          role="alert"
          className="mt-4 rounded-lg border border-[var(--pp-coral)]/40 bg-[var(--pp-coral)]/10 px-3 py-2 text-sm text-[var(--pp-coral)]"
        >
          Não foi possível enviar sua inscrição. Tente novamente em instantes.
        </p>
      )}

      <div className="relative mt-6">
        {avisoAberto && !formValido && (
          <div
            role="alert"
            className="animate-rise absolute bottom-full left-1/2 z-10 mb-3 w-max max-w-[16rem] -translate-x-1/2 rounded-lg border border-[var(--pp-coral)]/50 bg-[rgba(12,10,18,0.96)] px-3.5 py-2.5 text-center text-sm font-medium text-white shadow-xl backdrop-blur"
          >
            Preencha todos os dados para continuar.
            <span
              aria-hidden
              className="absolute left-1/2 top-full size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-[var(--pp-coral)]/50 bg-[rgba(12,10,18,0.96)]"
            />
          </div>
        )}
        <button
          type="submit"
          aria-disabled={!formValido || estado === "enviando"}
          className={`font-display group inline-flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(100deg,var(--pp-violet),var(--pp-magenta)_55%,var(--pp-coral))] text-base font-bold text-white shadow-lg shadow-[color:var(--pp-magenta)]/30 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--pp-surface)] ${
            formValido && estado !== "enviando"
              ? "hover:-translate-y-0.5"
              : "cursor-not-allowed opacity-60"
          }`}
        >
          {estado === "enviando" ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              <Ticket className="size-5 transition-transform group-hover:scale-110" />
              Confirmar inscrição gratuita
            </>
          )}
        </button>
      </div>

      <p className="mt-3 text-center text-xs text-white/45">
        Ao confirmar, seus dados serão usados apenas para a organização do
        evento.
      </p>
    </form>
  );
}
