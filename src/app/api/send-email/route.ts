import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

// Make sure to add RESEND_API_KEY to your .env file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, turnstileToken } = await req.json();

    if (!turnstileToken) {
      return NextResponse.json({ error: 'CAPTCHA token required' }, { status: 400 });
    }

    // Verify Turnstile Token using Cloudflare API
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA',
        response: turnstileToken,
      }),
    });

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      console.error('Turnstile verification failed:', verifyData);
      return NextResponse.json({ error: 'Failed CAPTCHA verification' }, { status: 403 });
    }

    // Strict Format Validation (Without pinging external DNS which causes local bugs)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please provide a validly formatted email address.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: `${name} via Your Portfolio <onboarding@resend.dev>`,
      to: 'mainakd545@gmail.com', // Your registered inbox
      replyTo: email, // This is what allows you to hit "Reply" and email them back!
      subject: `Portfolio Message from ${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });
  } catch (error: any) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
