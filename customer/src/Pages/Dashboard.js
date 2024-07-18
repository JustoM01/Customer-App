import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, CircularProgress, Alert, Paper, Grid } from '@mui/material';
import {useNavigate} from 'react-router-dom'
const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserData = async () => {
      try {

        // fetches user data from token in storage if logged in
        
        // fetches user data from token in storage if logged in
        // fetches user data from token in storage if logged in
        const token = localStorage.getItem('token');


        // if no token redirects to login
           

        // if no token redirects to login
        if (!token) {
        navigate('/login')
        return;
        }


        // passing token  to make api call 
        const response = await axios.get('/api/user/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        setLoading(false);
      } catch (err) {


        console.error('Error fetching user data:', err);


        // if statement for conditional error handling
        if (err.response && err.response.status === 401) {
          setError('Unauthorized access. Please log in again.');
        } else if (err.message === 'Network Error') {
          setError('Network error. Please check your internet connection.');
        } else {
          setError('Failed to fetch user data. Please try again later.');
        }
        setLoading(false);
      }
    
      
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }


  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" flexDirection="column">
        <Alert severity="error" style={{ marginBottom: '20px' }}>{error}</Alert>
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Typography variant="h3" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      {userData && (
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            User Information:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1"><strong>Name:</strong> {userData.name}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1"><strong>Email:</strong> {userData.email}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1"><strong>Phone Number:</strong> {userData.phoneNumber}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1"><strong>Address:</strong> {userData.address}</Typography>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Box>
  );
};

export default Dashboard;
