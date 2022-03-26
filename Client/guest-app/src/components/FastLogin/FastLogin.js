import './FastLogin.css'
import { QRCode } from "react-qrcode-logo";

const FastLogin = () => {
  return (
    <div className='qrcode_container'>
        <span className='qrcode_title'>Fast Check In</span>
        <QRCode value="https://github.com/Nicholas-Darko-Brown" size={110} />
    </div>
  )
}

export default FastLogin