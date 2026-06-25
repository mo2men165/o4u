import { MailerSend } from 'mailersend';

let client: MailerSend | null = null;

export function getMailerSend(): MailerSend {
  const apiKey = process.env.MAILERSEND_API_KEY;
  if (!apiKey) {
    throw new Error('MAILERSEND_API_KEY is not configured.');
  }

  if (!client) {
    client = new MailerSend({ apiKey });
  }

  return client;
}

export function getMailerSendFrom() {
  const email = process.env.MAILERSEND_FROM_EMAIL;
  const name = process.env.MAILERSEND_FROM_NAME ?? 'O4U Careers';

  if (!email) {
    throw new Error('MAILERSEND_FROM_EMAIL is not configured.');
  }

  return { email, name };
}
