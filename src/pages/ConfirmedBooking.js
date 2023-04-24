import restaurantImage from './../images/restaurant.jpg';
import { useLocation } from 'react-router-dom';
const ConfirmedBooking = () =>{    
    const location = useLocation();
    return (
        <main>
            <section className="booking bookingConfirmed">
                    <img className="reserveTableImg" alt="Little Lemon Restaurant Booking" src={restaurantImage} /> 
                    <div className="container reserveTableSection">                        
                        {/* <h3>Your booking has been confirmed, {location.state.name}</h3> */}
                        <p>Your booking has been confirmed, {location.state.name}!</p><br/>
                        <h3>Reservation Details</h3>
                        <p>Date: {location.state.date}</p>
                        <p>Time: {location.state.time}</p>
                        <p>Number of guests: {location.state.guests}</p>
                    </div>                         
            </section>
        </main>
    )
};
export default ConfirmedBooking;