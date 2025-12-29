import * as React from 'react';

interface ReportEmailProps {
  username: string;
  reason: string;
}

export const ReportEmail: React.FC<ReportEmailProps> = ({
  username,
  reason,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
    <h1 style={{ color: '#d32f2f' }}>⚠️ Alerte Discipline Troupers</h1>
    <p>Bonjour {username},</p>
    <p>
      Un membre de votre escouade a signalé un manquement à vos obligations de soutien.
    </p>
    <div style={{ backgroundColor: '#fff0f0', padding: '15px', borderRadius: '5px', margin: '20px 0' }}>
      <strong>Motif :</strong> {reason}
    </div>
    <p>
      Rappel : La force de l'escouade repose sur la réciprocité. Si vous ne soutenez pas vos camarades, vous risquez d'être exclu de l'escouade.
    </p>
    <p>
      Connectez-vous rapidement pour rattraper votre retard :
      <br />
      <a href="https://troupers.vercel.app/dashboard" style={{ color: '#0070f3' }}>Accéder au QG</a>
    </p>
    <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid #eaeaea' }} />
    <p style={{ fontSize: '12px', color: '#666' }}>
      L'équipe Troupers
    </p>
  </div>
);
