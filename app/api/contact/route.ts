import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Email to your team
    const msgToTeam = {
      to: 'info@quartz.solutions',
      from: 'info@quartz.solutions', // Must be verified in SendGrid
      subject: `FEAM Assessment Request from ${data.name}`,
      html: `
        <h2>New FEAM Assessment Request</h2>
        <p><strong>Organization:</strong> ${data.organization}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Role:</strong> ${data.role}</p>
        <p><strong>Facility Size:</strong> ${data.facilitySize}</p>
        <p><strong>Primary Interest:</strong> ${data.primaryInterest}</p>
        <p><strong>Referral Source:</strong> ${data.referralSource}</p>
        <p><strong>Message:</strong> ${data.message || 'N/A'}</p>
      `,
    };

    // Auto-response to client
    const msgToClient = {
      to: data.email,
      from: 'info@quartz.solutions',
      subject: 'Thank you for your interest in Quartz Solutions',
      html: `
        <h2>Thank you for reaching out, ${data.name}!</h2>
        <p>We've received your FEAM assessment request and appreciate your interest in our facilities intelligence services.</p>
        <p>Our team will review your information and respond within one business day with:</p>
        <ul>
          <li>Initial assessment of your requirements</li>
          <li>Relevant case examples from similar implementations</li>
          <li>Suggested next steps for engagement</li>
        </ul>
        <p>We look forward to discussing how we can transform your facilities operations.</p>
        <br>
        <p>Best regards,<br>The Quartz Solutions Team</p>
      `,
    };

    // Send both emails
    await sgMail.send(msgToTeam);
    await sgMail.send(msgToClient);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
