import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import {fetchAPI} from './utils/api';

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableSlots={fetchAPI(new Date())} />);
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();
})

test('Update time correctly', () => {
  const setTimeSlots=()=>{}
  render(<BookingForm availableSlots={fetchAPI(new Date())} setTimeSlots={setTimeSlots} />);
  const dateField = screen.getByLabelText("Choose date");
  fireEvent.change(dateField,{target: {value:"2023-04-22"}});
  const timeSlotField = screen.getByLabelText("Choose time");
  fireEvent.change(timeSlotField,{target: {value:"17:00"}});
  expect(timeSlotField.value).toEqual("17:00");
})

test('Valid form fields', () => {
  const setTimeSlots=()=>{}
  render(<BookingForm availableSlots={fetchAPI(new Date())} setTimeSlots={setTimeSlots} />);
  const dateField = screen.getByLabelText("Choose date");
  fireEvent.change(dateField,{target: {value:"2023-04-22"}});
  const timeSlotField = screen.getByLabelText("Choose time");
  fireEvent.change(timeSlotField,{target: {value:"17:00"}});
  const guestsField = screen.getByLabelText("Number of guests");
  fireEvent.change(guestsField,{target: {value:"2"}});
  const occasionField = screen.getByLabelText("Occasion");
  fireEvent.change(occasionField,{target: {value:"Birthday"}});
  const nameField = screen.getByLabelText("Your Name");
  fireEvent.change(nameField,{target: {value:"Test"}});
  const emailField = screen.getByLabelText("Your Email");
  fireEvent.change(emailField,{target: {value:"test@example.com"}});
  const reserveBtn = screen.getByRole("button")
  expect(reserveBtn).not.toBeDisabled();
})

test('Submit button working', () => {  
  render(<BookingForm availableSlots={["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]} />);
  const reserveBtn = screen.getByRole("button")
  expect(reserveBtn).toBeDisabled();
})
