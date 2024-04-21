import { Link } from 'react-router-dom';
import './Footer.scss';
import { ROUTES, AUTHORS } from 'constants';

function Footer({ text = 'Bình Chọn', to = ROUTES.VOTE }) {
    return (
        <div className="footer">
            <div>
                <p>
                    {AUTHORS.map((author) => (
                        <span key={author.name}>
                            「<strong onClick={() => window.open(author.url, '_blank')}>{author.name}</strong> (
                            {author.description})」
                        </span>
                    ))}
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
