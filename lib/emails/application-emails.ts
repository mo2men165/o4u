import { EmailParams, Recipient, Sender } from 'mailersend';
import { COMPANY_INFO } from '@/lib/constants';
import { getMailerSend, getMailerSendFrom } from '@/lib/mailersend';

export interface ApplicationEmailData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  coverMessage?: string;
  cvFileName?: string;
  cvUrl?: string;
  audioFileName?: string;
  audioUrl?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function firstName(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] || fullName;
}

function emailShell(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>O4U</title>
</head>
<body style="margin:0;padding:0;background-color:#F5F0FA;font-family:'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F0FA;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          ${content}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function brandedHeader(subtitle: string): string {
  return `
    <tr>
      <td style="background:linear-gradient(135deg,#2A1245 0%,#5B2D8E 55%,#8C58C0 100%);border-radius:16px 16px 0 0;padding:36px 40px;text-align:center;">
        <p style="margin:0 0 8px;font-size:28px;font-weight:800;letter-spacing:0.08em;color:#E8C770;">O4U</p>
        <p style="margin:0;font-size:14px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.82);">${escapeHtml(subtitle)}</p>
      </td>
    </tr>`;
}

function brandedFooter(): string {
  const { address, phone, email, socials } = COMPANY_INFO;

  return `
    <tr>
      <td style="background-color:#1C0B30;border-radius:0 0 16px 16px;padding:28px 40px;text-align:center;">
        <p style="margin:0 0 8px;font-size:13px;color:rgba(255,255,255,0.75);">${escapeHtml(COMPANY_INFO.name)} &mdash; Egypt&apos;s Premier Outsourcing Partner</p>
        <p style="margin:0 0 16px;font-size:12px;line-height:1.6;color:rgba(255,255,255,0.55);">
          ${escapeHtml(address)}<br />
          ${escapeHtml(phone)} &bull; <a href="mailto:${escapeHtml(email)}" style="color:#E8C770;text-decoration:none;">${escapeHtml(email)}</a>
        </p>
        <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.4);">
          <a href="${escapeHtml(socials.linkedin)}" style="color:#E8C770;text-decoration:none;margin:0 8px;">LinkedIn</a>
          <a href="${escapeHtml(socials.facebook)}" style="color:#E8C770;text-decoration:none;margin:0 8px;">Facebook</a>
          <a href="${escapeHtml(socials.instagram)}" style="color:#E8C770;text-decoration:none;margin:0 8px;">Instagram</a>
        </p>
      </td>
    </tr>`;
}

function detailRow(label: string, value: string, isLink = false): string {
  const cellContent = isLink && value
    ? `<a href="${escapeHtml(value)}" style="color:#5B2D8E;text-decoration:none;font-weight:600;">${escapeHtml(value)}</a>`
    : escapeHtml(value || '—');

  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #E9DBF5;font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#8C58C0;width:140px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:12px 0;border-bottom:1px solid #E9DBF5;font-size:15px;line-height:1.5;color:#161221;vertical-align:top;">${cellContent}</td>
    </tr>`;
}

function detailLinkRow(label: string, url: string, linkText: string): string {
  const cellContent = `<a href="${escapeHtml(url)}" style="color:#5B2D8E;text-decoration:none;font-weight:600;">${escapeHtml(linkText)}</a>`;

  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #E9DBF5;font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#8C58C0;width:140px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:12px 0;border-bottom:1px solid #E9DBF5;font-size:15px;line-height:1.5;color:#161221;vertical-align:top;">${cellContent}</td>
    </tr>`;
}

export function buildApplicationNotificationHtml(data: ApplicationEmailData): string {
  const submittedAt = new Date().toLocaleString('en-GB', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Africa/Cairo',
  });

  const body = `
    ${brandedHeader('New Job Application')}
    <tr>
      <td style="background-color:#ffffff;padding:36px 40px;">
        <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#161221;">
          A new application has been submitted for <strong style="color:#5B2D8E;">${escapeHtml(data.position)}</strong>.
        </p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          ${detailRow('Applicant', data.fullName)}
          ${detailRow('Email', data.email)}
          ${detailRow('Phone', data.phone)}
          ${detailRow('Position', data.position)}
          ${detailRow('Cover Message', data.coverMessage || '—')}
          ${data.cvUrl ? detailLinkRow('CV', data.cvUrl, data.cvFileName || 'Download CV') : detailRow('CV', 'Not provided')}
          ${data.audioUrl ? detailLinkRow('Audio', data.audioUrl, data.audioFileName || 'Listen to introduction') : detailRow('Audio', 'Not provided')}
          ${detailRow('Submitted', submittedAt)}
        </table>
        <p style="margin:0;font-size:13px;color:#8C58C0;">Review this application in the admin dashboard.</p>
      </td>
    </tr>
    ${brandedFooter()}`;

  return emailShell(body);
}

export function buildApplicationNotificationText(data: ApplicationEmailData): string {
  const lines = [
    `New application for ${data.position}`,
    '',
    `Applicant: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Position: ${data.position}`,
    `Cover Message: ${data.coverMessage || '—'}`,
    `CV: ${data.cvUrl || 'Not provided'}`,
    `Audio: ${data.audioUrl || 'Not provided'}`,
  ];

  return lines.join('\n');
}

export function buildApplicantThankYouHtml(data: ApplicationEmailData): string {
  const name = firstName(data.fullName);

  const body = `
    ${brandedHeader('Application Received')}
    <tr>
      <td style="background-color:#ffffff;padding:36px 40px;">
        <p style="margin:0 0 8px;font-size:22px;font-weight:700;color:#161221;">Hi ${escapeHtml(name)},</p>
        <p style="margin:0 0 24px;font-size:16px;line-height:1.7;color:#4D2578;">
          Thank you for applying to join the <strong style="color:#5B2D8E;">O4U</strong> team. We&apos;ve received your application for
          <strong style="color:#5B2D8E;">${escapeHtml(data.position)}</strong> and our HR team is already reviewing it.
        </p>

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F0FA;border-radius:12px;margin-bottom:28px;">
          <tr>
            <td style="padding:24px;">
              <p style="margin:0 0 16px;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#8C58C0;">What happens next</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 0 14px 0;vertical-align:top;width:28px;font-size:16px;color:#D4AF37;font-weight:700;">1</td>
                  <td style="padding:0 0 14px 0;font-size:15px;line-height:1.6;color:#161221;">Our recruiters review your CV and voice introduction.</td>
                </tr>
                <tr>
                  <td style="padding:0 0 14px 0;vertical-align:top;width:28px;font-size:16px;color:#D4AF37;font-weight:700;">2</td>
                  <td style="padding:0 0 14px 0;font-size:15px;line-height:1.6;color:#161221;">Shortlisted candidates are contacted within <strong>2 business days</strong>.</td>
                </tr>
                <tr>
                  <td style="padding:0;vertical-align:top;width:28px;font-size:16px;color:#D4AF37;font-weight:700;">3</td>
                  <td style="padding:0;font-size:15px;line-height:1.6;color:#161221;">If selected, we&apos;ll invite you to the next stage of our hiring process.</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#4D2578;">
          In the meantime, keep an eye on your inbox (and spam folder) for updates from our team. If you have any questions, reply to this email or reach us at
          <a href="mailto:${escapeHtml(COMPANY_INFO.email)}" style="color:#5B2D8E;font-weight:600;text-decoration:none;">${escapeHtml(COMPANY_INFO.email)}</a>.
        </p>

        <p style="margin:0;font-size:15px;line-height:1.7;color:#161221;">
          We appreciate your interest in building your career with us.
        </p>
        <p style="margin:20px 0 0;font-size:15px;line-height:1.7;color:#161221;">
          Warm regards,<br />
          <strong style="color:#5B2D8E;">The O4U HR Team</strong>
        </p>
      </td>
    </tr>
    ${brandedFooter()}`;

  return emailShell(body);
}

export function buildApplicantThankYouText(data: ApplicationEmailData): string {
  const name = firstName(data.fullName);

  return `Hi ${name},

Thank you for applying to join the O4U team. We've received your application for ${data.position} and our HR team is already reviewing it.

What happens next:
1. Our recruiters review your CV and voice introduction.
2. Shortlisted candidates are contacted within 2 business days.
3. If selected, we'll invite you to the next stage of our hiring process.

If you have any questions, contact us at ${COMPANY_INFO.email}.

Warm regards,
The O4U HR Team`;
}

export async function sendApplicationEmails(data: ApplicationEmailData): Promise<void> {
  const mailerSend = getMailerSend();
  const from = getMailerSendFrom();
  const sentFrom = new Sender(from.email, from.name);

  const internalEmail = new EmailParams()
    .setFrom(sentFrom)
    .setTo([new Recipient(COMPANY_INFO.email, 'O4U HR')])
    .setReplyTo(new Recipient(data.email, data.fullName))
    .setSubject(`New Application: ${data.position} — ${data.fullName}`)
    .setHtml(buildApplicationNotificationHtml(data))
    .setText(buildApplicationNotificationText(data));

  const thankYouEmail = new EmailParams()
    .setFrom(sentFrom)
    .setTo([new Recipient(data.email, data.fullName)])
    .setReplyTo(new Recipient(COMPANY_INFO.email, 'O4U HR'))
    .setSubject(`Thank you for applying — ${data.position} at O4U`)
    .setHtml(buildApplicantThankYouHtml(data))
    .setText(buildApplicantThankYouText(data));

  await Promise.all([
    mailerSend.email.send(internalEmail),
    mailerSend.email.send(thankYouEmail),
  ]);
}
