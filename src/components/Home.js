import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './HomePage.css';
import Button from '@mui/material/Button'; // Import Button from MUI
import Container from '@mui/material/Container'; // Import Container from MUI
import backgroundImage from '../images/background.jpg';


const HomePage = () => {
  const [startDate, setStartDate] = useState(new Date()); // State for selected date
  const [isAvailable, setIsAvailable] = useState(false); // State for availability status
  const navigate = useNavigate(); // Use useNavigate hook to get navigation function

  const handleCheckAvailability = () => {
    // Logic to check availability
    // For demonstration, let's assume availability is true if the selected date is not today
    const today = new Date();
    const selectedDate = new Date(startDate);
    setIsAvailable(selectedDate.getDate() !== today.getDate());
  };

  return (
    <Container maxWidth="md" className="home-container"> 
      <div className="home-container">
        <h1 className="title">Welcome to Hotel Booking Management System</h1>
        <p className="subtitle">Manage your hotel bookings efficiently with our system.</p>
        <div className="book-room-section">
          <h2 className="section-title">Book a Room</h2>
          <div className="input-group">
            <label htmlFor="date-picker">Select Date:</label>
            <input id="date-picker" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="location-select">Select Location:</label>
            <select id="location-select">
              <option value="location1">select-location</option>
              <option value="location2">VIJAYAWADA</option>
              <option value="location3">KASHMIR</option>
              <option value="location1">VIZAG</option>
              <option value="location2">MUMBAI</option>
              <option value="location3">DELHI</option>
            </select>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, width: '20%' }}
            onClick={() => navigate('/bookhotel')}
          >
            Book Hotel
          </Button>
          {isAvailable && <div className="alert">Room is available on selected date!</div>}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
