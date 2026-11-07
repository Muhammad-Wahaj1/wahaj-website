import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { contactSchema } from '@/lib/validation';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const raw = await request.json();
    const parsed = contactSchema.safeParse(raw);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message || 'Invalid request.' }, { status: 400 });
    }

    const { name, email, subject, message } = parsed.data;
    const contactEmail = process.env.CONTACT_EMAIL || 'csmuhammadwahaj@gmail.com';

    if (!resend) {
      return NextResponse.json({
        message: 'Your message was accepted locally. Configure RESEND_API_KEY and CONTACT_EMAIL to enable email delivery.'
      });
    }

    await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`,
      to: [contactEmail],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    });

    return NextResponse.json({ message: 'Your message was sent successfully.' });
  } catch (error) {
    console.error('Contact form submission failure', error);
    return NextResponse.json({ error: 'Unable to submit the message right now. Please email me directly.' }, { status: 500 });
  }
}
