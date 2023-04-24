import SpecialItem from './SpecialItem';
import greekSalad from './../images/greek_salad.jpg';
import bruchetta from './../images/bruchetta.jpg';
import lemonDessert from './../images/lemon_dessert.jpg';
const Specials = () => {
    const specialsData = [
        {
            "id":1,
            "name":"Greek Salad",
            "image":greekSalad,
            "price":"$12.99",
            "description":"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        },
        {
            "id":2,
            "name":"Bruchetta",
            "image":bruchetta,
            "price":"$5.99",
            "description":"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        },
        {
            "id":3,
            "name":"Lemon Dessert",
            "image":lemonDessert,
            "price":"$5.00",
            "description":"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        }
    ];
    return (
        <section className="specials">
            <div className="container">
                <div className="weeksSpecialsContent grid grid-2-1">
                    <div className="weekSpecialsTitle">
                        <h1>This weeks specials!</h1>
                    </div>                
                    <div className="onlineMenu">
                        <button className="btn onlineMenuBtn">Online Menu</button>
                    </div>                                
                </div>  
                <div className="specialItemsContent grid grid-3">
                {specialsData.map((item)=>{
                        return(
                            <SpecialItem key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} description={item.description} />
                        )                        
                    })}    
                </div>
            </div>            
        </section>
    )
};
export default Specials;    