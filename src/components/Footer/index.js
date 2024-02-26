import { Link } from "react-router-dom";

import "./Footer.scss"

function Footer({ text = "Bình Chọn", to = "/vote" }) {
    return (
        <div className='footer'>
            <div>
                <p>
                    ©「<strong onClick={() => window.open("https://www.facebook.com/hyddytngokngek", "_blank")}>Hyddyt</strong> (Organizer)」
                    「<strong onClick={() => window.open("https://www.facebook.com/Zennomi", "_blank")}>Zennomi</strong> (Backend)」
                    「<strong onClick={() => window.open("https://www.facebook.com/TheMeoki", "_blank")}>Meoki</strong> (Frontend)」
                </p>
                <div className="footerBtn">
                    <Link className="btnLink" to={to} target="_blank">
                        <span>{text}</span>
                    </Link>
                </div>
                <p>© BXH Light Novel Việt Nam 2024</p>
            </div>
        </div>
    );
}

export default Footer;