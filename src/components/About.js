import image1 from './../images/restaurant_chef_B.jpg';
import image2 from './../images/Mario_and_Adrian_b.jpg';;
const About = () => {
    return (
        <section className="about">
            <div className="container grid">
                <div className="aboutDescription">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.<br/>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>                    
                </div>
                <div className="aboutImages">
                    <img className="aboutImage1" src={image1} />  
                    <img className="aboutImage2" src={image2} />  
                </div>
            </div>
        </section> 
    )
};
export default About;    