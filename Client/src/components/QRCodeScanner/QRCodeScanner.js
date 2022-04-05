import { TextareaAutosize } from '@material-ui/core';
import React, { useState } from 'react';
import QrScan from 'react-qr-reader';

const QRCodeScanner = () => {
  const [qrscan, setQrscan] = useState('');
  const handleScan = data => {
    if (data) {
      setQrscan(data);
    }
  };
  const handleError = err => {
    console.error(err);
  };

  return (
    <div>
      <center>
        <span style={{fontSize: 20, fontWeight: 'bold'}}>QR Scanner</span>
      </center>

      <center>
        <div style={{ marginTop: 30 }}>
          <QrScan
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ height: 240, width: 350 }}
          />
        </div>
      </center>

      <center>
        <TextareaAutosize
          style={{ fontSize: 18, width: 320, height: 100, marginTop: 130, border: '2px solid rgb(253, 130, 92)', padding: '5px' }}
          rowsMax={4}
          defaultValue={qrscan}
          value={qrscan}
          placeholder="Empty"
        />
      </center>
    </div>
  );
};

export default QRCodeScanner;
