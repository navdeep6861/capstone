import restaurantImage from './../images/restaurant.jpg';
import BookingForm from '../components/BookingForm';
import { useReducer } from 'react';
import {fetchAPI, submitAPI} from '../utils/api';
import { useNavigate } from 'react-router-dom';
const BookingPage  = () =>{        
    const navigate = useNavigate();
    const initializeTimes = () => {        
        return fetchAPI(new Date());
    }
    const updateTimes = (state,action)=>{
        if(action.type === "setTimeSlots"){            
            state = fetchAPI(new Date(action.date))
        }        
        return state;
    }  
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes());  
    
    const submitForm = (formData) => {                
        if(submitAPI(formData)){
            navigate("/booking-confirmed",{state:formData});
        }
    }

    return (
        <main>
            <section className="booking">
                    <img className="reserveTableImg" alt="Reserve a table" src={restaurantImage} />                            
                    <BookingForm setTimeSlots={setAvailableTimes} submitHandle={submitForm} availableSlots={availableTimes} />
            </section>
        </main>
    )
};
export default BookingPage ;