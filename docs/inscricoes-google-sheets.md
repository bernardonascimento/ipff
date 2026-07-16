# Inscrições do evento Purples → Google Sheets

A página `/purples` grava as inscrições numa planilha do Google usando um
**webhook do Apps Script**. O fluxo é:

```
Formulário (/purples) → /api/purples-inscricao (servidor) → Webhook Apps Script → Planilha
```

A URL do webhook fica na variável de ambiente `PURPLES_SHEETS_WEBHOOK_URL`
(nunca é exposta ao navegador). Enquanto ela não estiver preenchida, o envio
do formulário retorna erro ("não configurado").

---

## Passo a passo (feito uma única vez)

### 1. Abrir o editor de Apps Script

Na planilha de inscrições: **Extensões → Apps Script**.

### 2. Colar o script

Selecione tudo (Ctrl/Cmd+A), apague, e cole exatamente este bloco. A última
linha deve ser apenas `}` — colagens incompletas causam "Unexpected end of
input".

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var b = JSON.parse(e.postData.contents);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Data', 'Evento', 'Nome', 'E-mail', 'Celular', 'Ingressos']);
  }
  var data = Utilities.formatDate(new Date(b.data || new Date()), 'America/Sao_Paulo', 'dd/MM/yyyy HH:mm');
  sheet.appendRow([data, b.evento, b.nome, b.email, b.celular, b.quantidade]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
```

Salve (ícone de disquete).

### 3. Implantar como App da Web

- **Implantar → Nova implantação**
- Engrenagem → tipo **App da Web**
- **Executar como:** Eu (sua conta)
- **Quem tem acesso:** **Qualquer pessoa**
- **Implantar** e autorizar as permissões quando pedir.
- Copie a **URL do app da Web** (termina em `/exec`).

> A cada alteração no script é preciso **criar uma nova implantação** (ou
> "Gerenciar implantações → editar → nova versão") para valer.

### 4. Configurar a variável de ambiente

No arquivo `.env.local` (local) e na **Vercel** (Project Settings →
Environment Variables), defina:

```
PURPLES_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/SEU_ID/exec
```

- **Local:** reinicie o `pnpm dev` depois de salvar.
- **Vercel:** adicione a variável e faça um novo deploy.

---

## Testar

**Direto no webhook** (confirma que o Apps Script grava):

```bash
curl -L "$PURPLES_SHEETS_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  --data '{"evento":"Teste","nome":"Fulano","email":"a@b.com","celular":"(16) 99999-9999","quantidade":2,"data":"2026-08-01T20:00:00.000Z"}'
```

Deve retornar `{"ok":true}` e criar uma linha na planilha. (Não force
`-X POST`: o Apps Script responde com um redirect 302 que o `curl -L` e o
`fetch` do servidor seguem como GET.)

**Pela página:** abra `/purples`, preencha o formulário e envie — a linha
aparece na planilha.

---

## Campos gravados

| Coluna    | Origem                                  |
| --------- | --------------------------------------- |
| Data      | data/hora do envio (fuso de São Paulo)  |
| Evento    | "Purples em Franca"                     |
| Nome      | campo do formulário                     |
| E-mail    | campo do formulário                     |
| Celular   | campo do formulário (com máscara)       |
| Ingressos | quantidade selecionada (1–20)           |

A validação (e-mail válido, celular, quantidade 1–20) acontece tanto no
navegador quanto no servidor (`src/app/api/purples-inscricao/route.ts`).
