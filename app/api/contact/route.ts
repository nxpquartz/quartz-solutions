// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await request.json();
    
    // Format pain points as a bullet list if they exist
    const painPointsList = data.painPoints && data.painPoints.length > 0
      ? `<ul>${data.painPoints.map((point: string) => `<li>${point}</li>`).join('')}</ul>`
      : 'None specified';
    
    const result = await resend.emails.send({
      from: 'Quartz Consulting Group <info@quartz.solutions>',
      to: ['info@quartz.solutions'],
      subject: `FEAM Assessment Request from ${data.name} - ${data.organization}`,
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #3752E0; padding-bottom: 10px;">
            New FEAM Assessment Request
          </h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3752E0; margin-top: 0;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 140px;">Organization:</td>
                <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${data.organization}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">
                  <a href="mailto:${data.email}" style="color: #3752E0;">${data.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Role:</td>
                <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${data.role}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3752E0; margin-top: 0;">Project Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 140px;">Facility Size:</td>
                <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${data.facilitySize}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Primary Interest:</td>
                <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${data.primaryInterest}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Timeline:</td>
                <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${data.timeline || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Referral Source:</td>
                <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${data.referralSource || 'Not specified'}</td>
              </tr>
            </table>
          </div>
          
          ${data.currentSystems ? `
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3752E0; margin-top: 0;">Current Systems</h3>
            <p style="color: #1f2937; margin: 0;">${data.currentSystems}</p>
          </div>
          ` : ''}
          
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Current Challenges</h3>
            <div style="color: #1f2937;">${painPointsList}</div>
          </div>
          
          ${data.message ? `
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3752E0; margin-top: 0;">Additional Information</h3>
            <p style="color: #1f2937; margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>
          ` : ''}
          
          <div style="border-top: 2px solid #e5e7eb; margin-top: 30px; padding-top: 20px;">
            <p style="color: #6b7280; font-size: 14px;">
              Submitted on: ${new Date().toLocaleString('en-US', { 
                timeZone: 'America/Los_Angeles',
                dateStyle: 'full',
                timeStyle: 'short'
              })}
            </p>
          </div>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}