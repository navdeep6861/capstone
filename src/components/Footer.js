import footerImage from './../images/Mario_and_Adrian_A.jpg';
const Footer = () => {
    return (
        <footer>
            <div className="container grid grid-4">
                <img src={footerImage} alt="Little Lemon" />
                <div className="doormatNavigation navigation">
                    <span>Doormat <br/>Navigation</span>
                    <nav>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Menu</a></li>
                            <li><a href="">Reservations</a></li>
                            <li><a href="">Order Online</a></li>
                            <li><a href="">Login</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="contact navigation">
                    <span>Contact</span>
                    <nav>
                        <ul>
                            <li><a href="">Address</a></li>
                            <li><a href="">Phone number</a></li>
                            <li><a href="">Email</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="socialMediaLinks navigation">
                    <span>Social Media Links</span>
                    <nav>
                        <ul>
                            <li><a href="">Facebook</a></li>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">Twitter</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
};

export default Footer;