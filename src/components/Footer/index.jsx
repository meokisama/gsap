import { Link } from 'react-router-dom';

import './Footer.scss';

function Footer({ text = 'Bình Chọn', to = import.meta.env.VITE_VOTEPATH }) {
    return (
        <div className="footer">
            <div>
                <p>
                    ©「
                    <strong onClick={() => window.open('https://www.facebook.com/hyddytngokngek', '_blank')}>
                        Hyddyt
                    </strong>{' '}
                    (Organizer)」 「
                    <strong onClick={() => window.open('https://www.facebook.com/Zennomi', '_blank')}>Zennomi</strong>{' '}
                    (Backend)」 「
                    <strong onClick={() => window.open('https://www.facebook.com/TheMeoki', '_blank')}>Meoki</strong>{' '}
                    (Frontend)」
                </p>
                <Link className="btnLink" to={to} target="_blank">
                    <div className="footerBtn">
                        <span>{text}</span>
                    </div>
                </Link>
                <p>© BXH Light Novel Việt Nam 2024</p>
            </div>
        </div>
    );
}

export default Footer;
