import { ReportEmail } from '@/components/emails/ReportEmail';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { to, username, reason } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Troupers <onboarding@resend.dev>',
      to: [to],
      subject: '⚠️ Alerte Discipline Troupers',
      react: ReportEmail({ username, reason }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
