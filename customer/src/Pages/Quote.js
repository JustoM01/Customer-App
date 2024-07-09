import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid, styled, MenuItem, Select, InputLabel, FormControl, Alert } from '@mui/material';
import axios from 'axios';

const HeroText = styled(Typography)({
  color: 'rgb(233, 30, 99)',
  fontFamily: 'Oswald, sans-serif',
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: '20px',
});

const QuoteForm = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  padding: '30px',
  backgroundColor: 'rgba(51, 51, 51, 0.8)',
  borderRadius: '8px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
});

const QuotePageContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: 'rgba(51, 51, 51, 0.1)',
  padding: '20px',
});

const Quote = () => {
  const [serviceName, setServiceName] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [email, setEmail] = useState('');

  const [error, setError] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    setEmailSent(false);

    try {
      const response = await axios.post('/api/estimate/generate-quote', {
        name: serviceName,
        vehicleType,
        email
      });
      console.log(response)
      setEmailSent(true);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <QuotePageContainer>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <QuoteForm component="form" onSubmit={handleSubmit}>
            <HeroText variant="h2" component="h1" gutterBottom>
              Get a Quote
            </HeroText>
            <FormControl fullWidth required sx={{ backgroundColor: 'white', borderRadius: '4px' }}>
              <InputLabel>Service Type</InputLabel>
              <Select
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                label="Service Type"
              >
                <MenuItem value="Basic Clean">Basic Clean</MenuItem>
                <MenuItem value="Tire Rotation">Tire Rotation</MenuItem>
                <MenuItem value="Brake Inspection">Brake Inspection</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{ backgroundColor: 'white', borderRadius: '4px' }}
            />
            <FormControl fullWidth required sx={{ backgroundColor: 'white', borderRadius: '4px' }}>
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
            </FormControl>
            <Button
              variant="contained"
              type="submit"
              sx={{ bgcolor: 'rgb(233, 30, 99)', color: 'white', width: '100%', padding: '10px' }}
            >
              Get Quote
            </Button>
          
            {emailSent && (
              <Alert severity="success" sx={{ mt: 2, width: '100%', textAlign: 'center' }}>
                Quote has been sent to your email!
              </Alert>
            )}
            {error && (
              <Typography sx={{ color: 'red', mt: 2, textAlign: 'center' }}>
                Error: {error}
              </Typography>
            )}
          </QuoteForm>
        </Grid>
      </Grid>
    </QuotePageContainer>
  );
};

export default Quote;
