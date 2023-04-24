import restauranfood from './../images/restauranfood.jpg';
import { Link } from 'react-router-dom';
const Main = () => {
    return (
        <section className="hero">
            <div className="container grid">
                <div className="heroDescription">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    <p>Welcome to our restaurant, where we believe that every meal should be a memorable experience. So come join us and discover why we are one of the most popular restaurants in town.</p>
                    <button aria-label="Reserve a Table" className="btn btn-primary reserveTable"><Link to="/booking">Reserve a Table</Link></button>
                </div>
                <img className="heroImage" src={restauranfood} />            
            </div>
        </section>
    )
};
export default Main;    