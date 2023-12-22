import "./Footer.css";
import { FaTelegramPlane } from "react-icons/fa";

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
                        <a href="https://t.me/shimimoryo"> <FaTelegramPlane /></a>
                        <a href="tel:">+998991899991</a>
                    </div>
                    <div className="Satipoff">
                        <h1>Сатипов Акбар</h1>
                        <a href="https://t.me/satipoff"> <FaTelegramPlane /></a>
                        <a href="tel:">+998335646404</a>
                    </div>
                </div>
            </div>
        </div>
    )
}