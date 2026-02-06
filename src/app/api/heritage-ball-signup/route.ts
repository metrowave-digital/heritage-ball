import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

if (!AUDIENCE_ID) {
  throw new Error('Missing RESEND_AUDIENCE_ID environment variable');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : '';
    const lastName = typeof body.lastName === 'string' ? body.lastName.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';

    if (!email || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    /* --------------------------------------------------
       1️⃣ Add contact to Resend Audience (idempotent)
    -------------------------------------------------- */
    await resend.contacts.create({
      email,
      firstName,
      lastName,
      audienceId: AUDIENCE_ID,
    });

    /* --------------------------------------------------
       2️⃣ Send confirmation email
    -------------------------------------------------- */
    await resend.emails.send({
      from: 'Heritage Ball <heritageball@imanational.org>',
      to: email,
      subject: 'You’re Locked In — Heritage Ball Vol. I',
      html: `
<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#000;color:#fff;font-family:Arial,Helvetica,sans-serif;">
    <div style="padding:40px 16px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;border:1px solid rgba(255,255,255,0.15);">
        <tr>
          <td style="padding:40px;text-align:center;">

            <!-- Badge -->
            <div style="
              display:inline-block;
              padding:6px 14px;
              border:1px solid rgba(255,255,255,0.3);
              text-transform:uppercase;
              font-size:11px;
              letter-spacing:2px;
              margin-bottom:24px;
            ">
              Heritage Ball • Vol. I
            </div>

            <!-- Title -->
            <h1 style="
              margin:0 0 16px;
              font-size:42px;
              font-weight:900;
              font-style:italic;
              letter-spacing:-1px;
            ">
              Royal Bloodlines
            </h1>

            <div style="height:4px;width:72px;background:#d946ef;margin:24px auto;"></div>

            <!-- Greeting -->
            <p style="font-size:18px;line-height:1.6;margin:0 0 24px;">
              Welcome, <strong>${firstName}</strong>.
            </p>

            <!-- Body -->
            <p style="font-size:16px;line-height:1.7;color:#d1d5db;margin:0 0 24px;">
              You are officially on the list for the inaugural
              <strong>Heritage Ball</strong> — a night of legacy, lineage,
              and ballroom excellence.
            </p>

            <!-- Event Info -->
            <table width="100%" style="
              margin:32px 0;
              border-top:1px solid rgba(255,255,255,0.2);
              border-bottom:1px solid rgba(255,255,255,0.2);
            ">
              <tr>
                <td style="padding:16px;text-align:center;">
                  <p style="
                    margin:0;
                    font-size:14px;
                    letter-spacing:2px;
                    text-transform:uppercase;
                    color:#9ca3af;
                  ">
                    April 8, 2028 • Charlotte, NC
                  </p>
                </td>
              </tr>
            </table>

            <!-- Promise -->
            <p style="font-size:15px;line-height:1.6;color:#e5e7eb;margin:24px 0;">
              Categories, judges, ticket releases, and ceremonial announcements
              will be delivered directly to your inbox.
            </p>

            <!-- Signature -->
            <p style="margin-top:40px;font-size:14px;color:#9ca3af;">
              — Heritage Ball Council
            </p>

          </td>
        </tr>
      </table>

      <!-- Footer -->
      <p style="text-align:center;font-size:11px;color:#6b7280;margin-top:24px;">
        You are receiving this because you requested updates for Heritage Ball.
      </p>
    </div>
  </body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('Heritage Ball signup error:', error);

    if (error instanceof Error) {
      // Resend duplicate-contact safeguard
      if (error.message.toLowerCase().includes('already exists')) {
        return NextResponse.json({ success: true });
      }
    }

    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}