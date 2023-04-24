import footerImage from './../images/Mario_and_Adrian_A.jpg';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className="container grid grid-4">
                <img src={footerImage} alt="Little Lemon" />
                <div className="doormatNavigation navigation">
                    <span>Doormat <br/>Navigation</span>
                    <nav>
                        <ul>
                            <li aria-label="Home"><Link to="/">Home</Link></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li aria-label="Reservations"><Link to="/booking">Reservations</Link></li>
                            <li><a href="#">Order Online</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="contact navigation">
                    <span>Contact</span>
                    <nav>
                        <ul>
                            <li><a href="#">2645 Grant Suite</a></li>
                            <li><a href="#">202-555-0195</a></li>
                            <li><a href="#">contact@test.com</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="socialMediaLinks navigation">
                    <span>Social Media Links</span>
                    <nav>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
};

export default Footer;