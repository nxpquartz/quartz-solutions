import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || '');

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const result = await resend.emails.send({
      from: 'Quartz Solutions <onboarding@resend.dev>',
      to: 'info@quartz.solutions',
      subject: `FEAM Assessment Request from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Organization:</strong> ${data.organization}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Role:</strong> ${data.role}</p>
        <p><strong>Facility Size:</strong> ${data.facilitySize}</p>
        <p><strong>Primary Interest:</strong> ${data.primaryInterest}</p>
        <p><strong>Referral Source:</strong> ${data.referralSource}</p>
        <p><strong>Message:</strong> ${data.message || 'No additional message'}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
