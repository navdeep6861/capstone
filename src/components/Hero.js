import restauranfood from './../images/restauranfood.jpg';
const Hero = () => {
    return (
        <section className="hero">
            <div className="container grid">
                <div className="heroDescription">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="btn btn-primary reserveTable">Reserve a Table</button>
                </div>
                <img className="heroImage" src={restauranfood} />            
            </div>
        </section>
    )
};
export default Hero;    