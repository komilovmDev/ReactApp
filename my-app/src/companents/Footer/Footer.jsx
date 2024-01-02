import "./Footer.css";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="Footer">
            <div className="Footer_Title">
                <h1>Muloqot uchun</h1>
            </div>
            <div className="Footer_Link">
                <div className="LinkFooter">
                    <div className="Yunusoff">
                        <h1>Юнусов МухаммадАли</h1>
                        <div className="YunusoffLink">
                            <a href="https://t.me/shimimoryo"> <FaTelegramPlane /></a>
                            <a href="https://www.instagram.com/kainssss?igsh=Z2UzdXF5eGpzaDli&utm_source=qr"><FaInstagram /></a>
                        </div>
                        <div className="YunusoffTell">
                            <a href="tel:">+998(99)189-99-91</a>
                        </div>
                    </div>
                    <div className="Satipoff">
                        <h1>Сатипов Акбар</h1>
                        <div className="SatipoffLink">
                            <a href="https://t.me/satipoff"> <FaTelegramPlane /></a>
                            <a href="https://www.instagram.com/kainssss?igsh=Z2UzdXF5eGpzaDli&utm_source=qr"><FaInstagram /></a>
                        </div>
                        <div className="SatipoffTell">
                            <a href="tel:">+998(33)564-64-04</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}