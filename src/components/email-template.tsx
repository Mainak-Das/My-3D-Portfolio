import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'sans-serif', padding: '40px', backgroundColor: '#f4f4f5' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      {/* Header aligned with your Portfolio's cinematic Dark Blue theme */}
      <div style={{ backgroundColor: '#0b132b', padding: '30px', textAlign: 'center' }}>
        <h1 style={{ color: '#ffffff', margin: 0, fontSize: '24px' }}>New Portfolio Contact</h1>
      </div>

      <div style={{ padding: '30px' }}>
        <p style={{ fontSize: '16px', color: '#333333', marginBottom: '20px' }}>
          <strong>You have intercepted a new message from {name}!</strong>
        </p>

        {/* Contact Info Block */}
        <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #1e40af', marginBottom: '30px' }}>
          <p style={{ margin: '0 0 10px 0', fontSize: '15px' }}><strong>Sender Email:</strong> <a href={`mailto:${email}`} style={{ color: '#0369a1' }}>{email}</a></p>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}><strong>Message:</strong><br /><br />{message}</p>
        </div>

        <p style={{ fontSize: '14px', color: '#64748b', textAlign: 'center', marginTop: '40px' }}>
          This automated email was dispatched from your Personal Portfolio via Resend.
        </p>
      </div>
    </div>
  </div>
);
