import logo from './../images/Logo.svg';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <nav className="container top-nav">
            <Link to="/"><img className="logo" width="148" height="40" src={logo} /></Link>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>            
            <ul className="menu">                
                <li aria-label="Home"><Link to="/">Home</Link></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>                
                <li aria-label="Reservations"><Link to="/booking">Reservations</Link></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>            
        </nav>
    )
};
export default Nav;    