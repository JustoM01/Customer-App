import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid, styled, Alert } from '@mui/material';
import axios from 'axios';


// link and usenav to help redirect and nav
import { Link, useNavigate } from 'react-router-dom';

const HeroText = styled(Typography)({
  color: 'rgb(233, 30, 99)',
  fontFamily: 'Oswald, sans-serif',
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: '20px',
});

const LoginForm = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  padding: '30px',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  borderRadius: '8px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
});

const LoginPageContainer = styled(Box)({
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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook to get navigation function

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/api/user/sign-in', { email, password });
      console.log('Login Response:', response.data);

      // Store the token in local storage
      localStorage.setItem('token', response.data.token);


          // Fetch user data after successful login
          const userResponse = await axios.get('/api/user/me', {
            headers: {
              Authorization: `Bearer ${response.data.token}` // Attaches token in the request header
            }
          });
      

          // logging user data after i get it
          console.log('User Data:', userResponse.data); 
    



      // Redirect to the dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error('Login Error:', err.response?.data);
      setError(err.response?.data?.error || 'Failed to log in');
    }
  };

  return (
    <LoginPageContainer>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
{/* 
          passes api func to form */}
          {/* 
          passes api func to form */}
          <LoginForm component="form" onSubmit={handleLogin}>
            <HeroText variant="h2" component="h1" gutterBottom>
              Login
            </HeroText>
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
            <Button
              variant="contained"
              type="submit"
              sx={{ bgcolor: 'rgb(233, 30, 99)', color: 'white', width: '100%', padding: '10px' }}
            >
              Login
            </Button>
           
            {error && (
              <Alert severity="error" sx={{ mt: 2, width: '100%', textAlign: 'center' }}>
                {error}
              </Alert>
            )}

            <Typography sx={{ mt: 2, textAlign: 'center', color: 'rgb(233, 30, 99)' }}>
              Reset Password
            </Typography>
            <Typography sx={{ mt: 2, textAlign: 'center', color: 'black' }}>
              Not registered? <Link to="/signup" style={{ color: 'rgb(233, 30, 99)', textDecoration: 'none' }}>Sign Up</Link>
            </Typography>
          </LoginForm>
        </Grid>
      </Grid>
    </LoginPageContainer>
  );
};

export default Login;
