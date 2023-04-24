import './utilities.css';
import './style.css';
import Header from './components/Header';
import HomePage  from './pages/HomePage ';
import Footer from './components/Footer';
import { Routes,Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage ';
import ConfirmedBooking from './pages/ConfirmedBooking';

function App() {
  return (
    <>
      <Header />      
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/booking" element={<BookingPage  />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />            
      </Routes>
      <Footer />
    </>
  );
}

export default App;
