import React, { useState } from 'react';
import './QRCode.css';
import {
  Container,
  Card,
  CardContent,
  makeStyles,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import QrCode from 'qrcode';
// import { QrReader } from 'react-qr-reader';

const QRCode = () => {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  // const [scanResultFile, setScanResultFile] = useState('');
  // const [scanResultWebCam, setScanResultWebCam] = useState('');
  // const qrRef = useRef(null);

  const classes = useStyles();

  const generateQrCode = async () => {
    try {
      const response = await QrCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleErrorFile = error => {
  //   console.log(error);
  // };

  // const handleScanFile = result => {
  //   if (result) {
  //     setScanResultFile(result);
  //   }
  // };

  // const onScanFile = () => {
  //   qrRef.current.openImageDialog();
  // };

  // const handleErrorWebCam = error => {
  //   console.log(error);
  // };

  // const handleScanWebCam = result => {
  //   if (result) {
  //     setScanResultWebCam(result);
  //   }
  // };

  return (
    <Container className={classes.container}>
      <Card>
        <h2 className={classes.title}>Generate and Download QR Code</h2>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <TextField
                type="text"
                label="Enter text here"
                onChange={e => setText(e.target.value)}
              />
              <Button
                className={classes.btn}
                variant="contained"
                color="rgb(253, 130, 92)"
                onClick={() => generateQrCode()}
              >
                Generate
              </Button>{' '}
              <br />
              {imageUrl ? (
                <a href={imageUrl} download>
                  
                  <img src={imageUrl} alt="img" />
                </a>
              ) : null}
            </Grid>
            {/* <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <Button
                className={classes.btn}
                variant="contained"
                color="secondary"
                onClick={onScanFile}
              >
                Scan Qr Code
              </Button>
              <QrReader
                ref={qrRef}
                delay={3000}
                style={{ width: '100%' }}
                onError={handleErrorFile}
                onScan={handleScanFile}
                legacyMode
              />
              <h3>Scanned Code: {scanResultFile} </h3>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <h3>Qr Code Scan by Web Cam</h3>
              <QrReader
                delay={3000}
                style={{ width: '100%' }}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
              />
              <h3>Scanned by WebCam: {scanResultWebCam} </h3>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 10,
    width: '70%',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(253, 130, 92)',
    color: '#fff',
    padding: 20,
    fontWeight: 600,
    fontSize: '1.2rem',
  },
  btn: {
    marginTop: 10,
    marginBottom: 20,
  },
}));

export default QRCode;
