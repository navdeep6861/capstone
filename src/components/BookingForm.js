import { useState, useRef, useEffect } from "react";
import { validateEmail } from "./../utils/validation";
const BookingForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");    
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");  
    const [additionalReq, setAdditionalReq] = useState("");  
    const changeDateHandler = (e)=>{
        setDate(e.target.value);
        props.setTimeSlots({type:'setTimeSlots',date:e.target.value});
    }

    const nameRef = useRef("");
    const emailRef = useRef("");
    const dateRef = useRef("");
    const timeRef = useRef("");    
    const guestsRef = useRef("");    
    const occasionRef = useRef("");        

    const validateField = (e) =>{        
        if(e.target.id=="res-date"){
            dateRef.current.innerHTML = e.target.value==""?"Please select a date!":"";
        }
        if(e.target.id=="res-time"){
            timeRef.current.innerHTML = e.target.value==""?"Please select a time slot!":"";
        }
        if(e.target.id=="guests"){
            guestsRef.current.innerHTML = (e.target.value=="" || e.target.value<1)?"Please enter number of guests!":"";
        }
        if(e.target.id=="occasion"){
            occasionRef.current.innerHTML = e.target.value==""?"Please select a occasion!":"";
        }
        if(e.target.id=="res-name"){
            nameRef.current.innerHTML = e.target.value==""?"Please enter your name!":"";
        }
        if(e.target.id=="res-email"){
            emailRef.current.innerHTML = !validateEmail(e.target.value)?"Please enter a valid email!":"";
        }
        
    }

    const getIsFormValid = () => {        
        if (time != "" && validateEmail(email) && date!="" && guests!="" && guests>=1 && name!="" && occasion!="") {
            return true;  
        }

        return false;    
    };

    const submitBtnHandler = (e)=>{
        e.preventDefault();
        props.submitHandle({date:date,time:time,guests:guests,occasion:occasion,name:name,additionalReq:additionalReq});        
    }

    return (
        <div className="container reserveTableSection">                        
            <h3>Reserve Table</h3>
            <p>Have a wonderful dining experience with us.</p>
            <form aria-label="Reserve Table Form" onSubmit={submitBtnHandler} style={{display: 'grid', maxWidth: '300px'}}>                
                <label htmlFor="res-date">Choose date</label>
                <input aria-label="Choose date" type="date" id="res-date" value={date} onChange={changeDateHandler} onBlur={(e) => {validateField(e)}} />
                <span  ref={dateRef} className="fieldError dateError"></span>
                <label htmlFor="res-time">Choose time</label>
                <select aria-label="Choose time" id="res-time" value={time} onChange={(e) => {setTime(e.target.value)}} onBlur={(e) => {validateField(e)}} >
                    <option key="1" value="">Select</option>
                    {
                       props.availableSlots.map((timeSlot)=>{
                        return <option key={timeSlot} value={timeSlot}>{timeSlot}</option>    
                       }) 
                    }
                </select>
                <span ref={timeRef} className="fieldError timeError"></span>
                <label htmlFor="guests">Number of guests</label>
                <input aria-label="Number of guests" type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => {setGuests(e.target.value)}} onBlur={(e) => {validateField(e)}} />              
                <span ref={guestsRef} className="fieldError guestsError"></span>  
                <label htmlFor="occasion">Occasion</label>
                <select aria-label="Occasion" id="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value)}} onBlur={(e) => {validateField(e)}} >
                    <option value="">Select</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>       
                <span  ref={occasionRef} className="fieldError occasionError"></span>     
                <label htmlFor="res-name">Your Name</label>
                <input aria-label="Your Name" type="text" id="res-name" placeholder="Your Name" value={name} onChange={(e) => {setName(e.target.value)}} onBlur={(e) => {validateField(e)}} />
                <span  ref={nameRef} className="fieldError nameError"></span>
                <label htmlFor="res-email">Your Email</label>
                <input aria-label="Your Email" type="email" required id="res-email" placeholder="Your Email" value={email} onChange={(e) => {setEmail(e.target.value)}} onBlur={(e) => {validateField(e)}} />
                <span  ref={emailRef} className="fieldError emailError"></span>      
                <label className="optional" htmlFor="res-additionalReq">Additional Requests</label>
                <textarea aria-label="Additional Requests" value={additionalReq} id="res-additionalReq" onChange={(e) => {setAdditionalReq(e.target.value)}} ></textarea>                
                <input aria-label="Submit" type="submit" role="button" className="btn reserveTableBtn" disabled={!getIsFormValid()} value="Make Your reservation" />
            </form>
        </div>
    )
};
export default BookingForm;    