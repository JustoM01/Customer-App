import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, CircularProgress, Alert, Paper, Grid, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching user data:', err);
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

  const DashboardContainer = styled(Box)({
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    padding: '20px', // Adjusted padding for spacing
    marginTop:'60px'
  });

  return (
    <DashboardContainer>


        {/* grid layout for reswponsive layout */}
      <Grid container justifyContent="center" sx={{ width: '100%' }}>
        <Grid item xs={12} sm={10} md={8} lg={6} sx={{ padding: 2 }}>
          <Typography variant="h3" gutterBottom>
            Welcome to the Dashboard
          </Typography>
          {userData && (
            <Paper elevation={3} sx={{ padding: 2, mt: 2 }}>
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
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

export default Dashboard;
