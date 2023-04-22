import TestimonialItem from './TestimonialItem';
const Testimonials = () => {
    const testimonialData = [
        {
            "id":1,
            "name":"John",
            "rating":5,
            "comment":"Loved it!"
        },
        {
            "id":2,
            "name":"Maria",
            "rating":5,
            "comment":"Highly recommended!"
        },
        {
            "id":3,
            "name":"Hailey",
            "rating":4.5,
            "comment":"Amazing food!"
        },
        {
            "id":4,
            "name":"Andy",
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
                            <TestimonialItem key={item.id} id={item.id} name={item.name} rating={item.rating} comment={item.comment} />
                        )                        
                    })}
                </div>                
            </div>
        </section>
    )
};
export default Testimonials;    