import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid, styled, Alert } from '@mui/material';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

const HeroText = styled(Typography)({
  color: 'rgb(233, 30, 99)',
  fontFamily: 'Oswald, sans-serif',
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: '20px',
});

const SignUpForm = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  padding: '30px',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  borderRadius: '8px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
});

const SignUpPageContainer = styled(Box)({
    marginTop:'10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '30px',
    animation: 'fade-in 1.5s ease-in-out',
    '@keyframes fade-in': {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    }
});

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('/api/user', { name, email, password, phoneNumber, address });
      console.log('Sign Up Response:', response.data);
      setSuccess('Sign up successful! Please log in.');
    } catch (err) {
      console.error('Sign Up Error:', err.response?.data);
      setError(err.response?.data?.error || 'Failed to sign up');
    }
  };

  return (
    <SignUpPageContainer>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <SignUpForm component="form" onSubmit={handleSignUp}>
            <HeroText variant="h2" component="h1" gutterBottom>
              Sign Up
            </HeroText>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              sx={{ backgroundColor: 'white', borderRadius: '4px' }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{ backgroundColor: 'white', borderRadius: '4px' }}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{ backgroundColor: 'white', borderRadius: '4px' }}
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              sx={{ backgroundColor: 'white', borderRadius: '4px' }}
            />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              sx={{ backgroundColor: 'white', borderRadius: '4px' }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ bgcolor: 'rgb(233, 30, 99)', color: 'white', width: '100%', padding: '10px' }}
            >
              Sign Up
            </Button>
            {success && (
              <Alert severity="success" sx={{ mt: 2, width: '100%', textAlign: 'center' }}>
                {success}
              </Alert>
            )}
            {error && (
              <Alert severity="error" sx={{ mt: 2, width: '100%', textAlign: 'center' }}>
                {error}
              </Alert>
            )}
            <Typography sx={{ mt: 2, textAlign: 'center', color: 'black' }}>
              Already have an account? <Link to="/login" style={{ color: 'rgb(233, 30, 99)', textDecoration: 'none' }}>Login</Link>
            </Typography>
          </SignUpForm>
        </Grid>
      </Grid>
    </SignUpPageContainer>
  );
};

export default SignUp;
