import React, { useState } from 'react';
import {QrReader} from 'react-qr-reader';

const QRScanner = ({ showScanner, onScanResult }) => {
  const [delay, setDelay] = useState(300);
  const [previewStyle, setPreviewStyle] = useState({ width: '100%' });

  const handleScan = (data) => {
    if (data) {
      onScanResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div style={{ display: showScanner ? 'block' : 'none' }}>
      <QrReader
        delay={delay}
        onError={handleError}
        onScan={handleScan}
        style={previewStyle}
      />
    </div>
  );
};

export default QRScanner;
