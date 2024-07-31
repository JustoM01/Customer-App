import React from 'react';
import Services from '../Components/Services';
import Ratings from '../Components/Ratings';
import { Box, Grid, styled, Typography, Button } from '@mui/material';

const Hero = require('./2Hero.mp4');

// Styled component for hero text
const HeroText = styled(Typography)(({ theme }) => ({
color:'rgb(233, 30, 99)',
  fontFamily: 'Oswald, sans-serif',
  fontSize: '3rem',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Added text shadow for readability
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

// Styled component for overlay
const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))', // Gradient overlay
  display: 'flex',
  flexDirection: 'column', // Stack text and button vertically
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '0 20px', // Padding for responsiveness
}));

// Styled component for call-to-action button
const CTAButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: 'rgb(233, 30, 99)',
  color: 'white',
  fontFamily: 'Oswald, sans-serif',
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: 'rgb(203, 27, 87)',
  },
}));

const Landing = () => {
  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', bgcolor: 'rgba(51, 51, 51, 0.1)', mt: '20px' }}>
      
      {/* Hero Section */}
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Box
            sx={{
              width: '100%',
              height: '50vh', // Adjusted height for the video section
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <video
              src={Hero}
              autoPlay
              loop
              muted
              playsInline
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: '0.7', // Slightly adjusted opacity for better visibility
              }}
            />
            <Overlay>
              <HeroText variant="h2" component="h1" gutterBottom>
                DETAIL DIRECT
              </HeroText>
              <Typography variant="h6" sx={{ color: 'white', mt: 1, mr:2 }}>
                Experience the Best in Car Detailing
              </Typography>
              <CTAButton variant="contained" href="#">
                Books
              </CTAButton>
            </Overlay>
          </Box>
        </Grid>
      </Grid>

      {/* About and services Sections */}
      <Grid container spacing={4} justifyContent="center">
        {/* Ratings */}
        <Grid item xs={10} sm={10} md={10}>
          <Box sx={{ minHeight: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Ratings />
          </Box>
        </Grid>

        {/* Services Section */}
        <Grid item xs={10} sm={10} md={10}>
          <Box sx={{ minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Services />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Landing;
