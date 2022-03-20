import React from 'react'
import { QRCode } from "react-qrcode-logo";

const FastLogin = () => {
  return (
    <div>
        <h1>Testing qr code</h1>
        <QRCode value="https://github.com/Nicholas-Darko-Brown" size={100}/>
    </div>
  )
}

export default FastLogin