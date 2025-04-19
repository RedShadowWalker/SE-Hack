import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import QrReader   from 'react-qr-reader';            // npm install react-qr-reader
import { submitCode } from '../../api/attendanceService';

export default function ScanAndMark() {
  const [message, setMessage] = useState('');

  const handleScan = async (data) => {
    if (!data) return;
    try {
      // Parse sessionId + token from the QR URL
      const params = new URL(data).searchParams;
      const sessionId = params.get('sessionId');
      const token     = params.get('token');

      const fbToken = await getAuth().currentUser.getIdToken();
      const { data: res } = await submitCode(sessionId, token, fbToken);
      setMessage(res.message);

    } catch (err) {
      setMessage(err.response?.data?.message || 'Scan failed');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl mb-2">Scan QR to Mark Attendance</h2>
      <QrReader
        delay={300}
        onError={console.error}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
