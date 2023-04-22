import logo from './../images/Logo.svg';
const Nav = () => {
    return (
        <nav className="container top-nav">
            <img className="logo" width="148" height="40" src={logo} />
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>            
            <ul className="menu">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservations</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Login</a></li>
            </ul>            
        </nav>
    )
};
export default Nav;    