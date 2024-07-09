import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid, styled, FormControl, InputLabel, Select, MenuItem, Alert } from '@mui/material';
import axios from 'axios';

const BookingForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  padding: '40px',
  backgroundColor: 'rgba(51, 51, 51, 0.85)',
  borderRadius: '10px',
  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.6)',
  [theme.breakpoints.down('sm')]: {
    padding: '30px',
  },
}));

const BookingPageContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: 'rgba(51, 51, 51, 0.15)',
  padding: '30px',
});

const StyledTextField = styled(TextField)({
  backgroundColor: 'white',
  borderRadius: '5px',
});

const StyledFormControl = styled(FormControl)({
  backgroundColor: 'white',
  borderRadius: '5px',
});

const StyledButton = styled(Button)({
  backgroundColor: 'rgb(233, 30, 99)',
  color: 'white',
  width: '100%',
  padding: '12px',
  marginTop: '20px',
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: 'rgb(200, 20, 80)',
  },
});

const Booking = () => {
  const [option, setOption] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingResult, setBookingResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setBookingResult(null);

    try {
      const response = await axios.post('/api/booking/book', {
        serviceName,
        vehicleType,
        customerName,
        customerEmail,
        bookingDate,
      });

      console.log('Booking API Response:', response.data); // Log the entire API response
      setBookingResult(response.data.newBooking);
    } catch (err) {
      console.error('Error booking service:', err);
      setError(err.response?.data?.error || 'Failed to book service');
    }
  };

  const formatBookingDate = (dateString) => {
    // Format the booking date
    const formattedDate = new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    return formattedDate;
  };

  return (
    <BookingPageContainer>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <BookingForm component="form" onSubmit={handleSubmit}>
            <Typography variant="h2" component="h1" gutterBottom style={{ color: 'rgb(233, 30, 99)', fontFamily: 'Oswald, sans-serif', fontSize: '2.5rem', textAlign: 'center', marginBottom: '25px' }}>
              Book a Service
            </Typography>
            
            <StyledFormControl fullWidth required sx={{ marginBottom: '20px' }}>
              <InputLabel>Sign In or Continue as Guest</InputLabel>
              <Select
                value={option}
                onChange={(e) => setOption(e.target.value)}
                label="Sign In or Continue as Guest"
              >
                <MenuItem value="signin">Sign In</MenuItem>
                <MenuItem value="guest">Continue as Guest</MenuItem>
              </Select>
            </StyledFormControl>

            {option === 'guest' && (
              <>
                <StyledTextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
                <StyledTextField
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  required
                />
              </>
            )}

            <StyledTextField
              label="Booking Date and Time"
              type="datetime-local"
              variant="outlined"
              fullWidth
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
            <StyledFormControl fullWidth required>
              <InputLabel>Service Name</InputLabel>
              <Select
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                label="Service Name"
              >
                <MenuItem value="Basic Clean">Basic Clean</MenuItem>
                <MenuItem value="Full Interior">Full Interior</MenuItem>
                <MenuItem value="Full Interior and Basic Exterior">Full Interior and Basic Exterior</MenuItem>
              </Select>
            </StyledFormControl>
            <StyledFormControl fullWidth required>
              <InputLabel>Vehicle Type</InputLabel>
              <Select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                label="Vehicle Type"
              >
                <MenuItem value="Compact/Smallcar">Compact/Smallcar</MenuItem>
                <MenuItem value="Sedan/Midsize">Sedan/Midsize</MenuItem>
                <MenuItem value="SUV/Truck">SUV/Truck</MenuItem>
              </Select>
            </StyledFormControl>
            <StyledButton
              variant="contained"
              type="submit"
            >
              Book Now
            </StyledButton>
            {bookingResult && (
              <Alert severity="success" sx={{ mt: 2, width: '100%', textAlign: 'center' }}>
                <Typography sx={{ mb: 1 }}>
                  Booking confirmed for {bookingResult.serviceTypeId.name} on {formatBookingDate(bookingResult.bookingDate)}
                </Typography>
                <Typography>
                  Email sent to: {bookingResult.customerEmail}
                </Typography>
              </Alert>
            )}
            {error && (
              <Typography sx={{ color: 'red', mt: 2, textAlign: 'center' }}>
                Error: {error}
              </Typography>
            )}
          </BookingForm>
        </Grid>
      </Grid>
    </BookingPageContainer>
  );
};

export default Booking;
