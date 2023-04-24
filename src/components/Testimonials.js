import TestimonialItem from './TestimonialItem';
import John from './../images/John.jpg';
import Maria from './../images/Maria.jpg';
import Hailey from './../images/Hailey.jpg';
import Andy from './../images/Andy.jpg';
const Testimonials = () => {
    const testimonialData = [
        {
            "id":1,
            "name":"John",
            "image":John,
            "rating":5,
            "comment":"Loved it!"
        },
        {
            "id":2,
            "name":"Maria",
            "image":Maria,
            "rating":5,
            "comment":"Highly recommended!"
        },
        {
            "id":3,
            "name":"Hailey",
            "image":Hailey,
            "rating":4.5,
            "comment":"Amazing food!"
        },
        {
            "id":4,
            "name":"Andy",
            "image":Andy,
            "rating":5,
            "comment":"My favorite place!!"
        }
    ];
    return (
        <section className="testimonials">
            <div className="container">
                <h3>Testimonials</h3>
                <div className="testimonialsList grid grid-4">
                    {testimonialData.map((item)=>{
                        return(
                            <TestimonialItem key={item.id} id={item.id} name={item.name} image={item.image} rating={item.rating} comment={item.comment} />
                        )                        
                    })}
                </div>                
            </div>
        </section>
    )
};
export default Testimonials;    