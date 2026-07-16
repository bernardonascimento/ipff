/**
 * Monta o e-mail de confirmação da inscrição do evento Purples.
 * HTML em tabela com estilos inline (compatível com clientes de e-mail),
 * no tema escuro do evento.
 */

type DadosEmail = {
  nome: string;
  quantidade: number;
  date: string;
  time: string;
  venue: string;
};

export function emailConfirmacao({
  nome,
  quantidade,
  date,
  time,
  venue,
}: DadosEmail): { subject: string; html: string; text: string } {
  const primeiroNome = nome.trim().split(" ")[0] || nome;
  const ingressoLabel = quantidade === 1 ? "ingresso" : "ingressos";
  const chipLabel =
    quantidade === 1 ? "ingresso garantido" : "ingressos garantidos";
  const subject = "Inscrição confirmada — Purples em Franca 🎸";

  // Ícone de ticket em emoji — garante renderização em todos os clientes de e-mail.
  const ticketIcon = "🎟";

  const html = `<!doctype html>
<html lang="pt-BR">
  <body style="margin:0;padding:0;background:#0c0a12;">
    <div style="background:#0c0a12;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;margin:0 auto;background:#17121f;border:1px solid #2c2440;border-radius:16px;overflow:hidden;">
        <tr><td style="height:4px;background:#d946ef;"></td></tr>
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 6px;color:#fb7185;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:bold;">Inscrição confirmada</p>
            <h1 style="margin:0 0 16px;color:#ffffff;font-size:26px;line-height:1.15;">Purples em Franca 🎸</h1>
            <p style="margin:0 0 6px;color:#b3a9c6;font-size:16px;line-height:1.6;">
              Olá, ${primeiroNome}! Seu lugar está garantido.
            </p>
            <p style="margin:0 0 20px;color:#b3a9c6;font-size:16px;line-height:1.6;">
              Reservamos ${ticketIcon} <strong style="color:#ffffff;">${quantidade} ${ingressoLabel}</strong> para você.
            </p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
              <tr>
                <td align="center">
                  <table role="presentation" cellpadding="0" cellspacing="0" style="background:#d946ef;background:linear-gradient(100deg,#7c3aed,#d946ef,#fb7185);border-radius:9999px;">
                    <tr>
                      <td style="padding:2px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" style="background:#0c0a12;border-radius:9999px;">
                          <tr>
                            <td style="padding:11px 22px;color:#ffffff;font-size:17px;font-weight:bold;white-space:nowrap;">
                              ${ticketIcon}&nbsp;&nbsp;${quantidade} ${chipLabel}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#201a2c;border-radius:12px;">
              <tr>
                <td style="padding:18px 20px;color:#ffffff;font-size:15px;line-height:1.9;">
                  📅 <strong>${date} às ${time}</strong><br />
                  📍 ${venue}<br />
                  🎟 Entrada gratuita
                </td>
              </tr>
            </table>
            <p style="margin:24px 0 0;color:#8f86a3;font-size:13px;line-height:1.6;">
              Nos vemos lá! Em caso de dúvida, é só responder este e-mail.<br />
              Igreja Presbiteriana Filadélfia de Franca
            </p>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`;

  const text = [
    `Inscrição confirmada — Purples em Franca`,
    ``,
    `Olá, ${primeiroNome}! Seu lugar está garantido.`,
    `🎟 Reservamos ${quantidade} ${ingressoLabel} para você.`,
    ``,
    `Data: ${date} às ${time}`,
    `Local: ${venue}`,
    `Entrada gratuita`,
    ``,
    `Nos vemos lá!`,
    `Igreja Presbiteriana Filadélfia de Franca`,
  ].join("\n");

  return { subject, html, text };
}
