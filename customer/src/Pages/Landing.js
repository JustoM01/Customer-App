import React from 'react';
import About from '../Components/About';
import Why from '../Components/Why';
import Ratings from '../Components/Ratings';
import { Box, Grid, styled, Typography } from '@mui/material';
const Hero = require('./2Hero.mp4');

const HeroText = styled(Typography)(({ theme }) => ({
  color: 'rgb(233, 30, 99)',
  fontFamily: 'Oswald, sans-serif',
  fontSize: '3rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
  textAlign: 'center'
}));

const SubtitleText = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFamily: 'Oswald, sans-serif',
  fontSize: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
  },
  textAlign: 'center'
}));

const BodyText = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFamily: 'Oswald, sans-serif',
  fontSize: '1.125rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
  },
  textAlign: 'center'
}));

const Landing = () => {
  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', bgcolor:' rgba(51, 51, 51, 0.1)' , mt:'20px'}}>
      
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
                opacity:'70%'
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              
                
                borderRadius: '6%',
                width: { xs: '80%', sm: '70%', md: '60%' },
                textAlign: 'center',
                height: { xs: '40%', sm: '40%', md: '55%' },
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <HeroText variant="h2" component="h1" gutterBottom>
                Detail Direct
              </HeroText>
              <SubtitleText variant="h4" gutterBottom>
                Your trusted partner for quality auto detailing
              </SubtitleText>
              <BodyText variant="body2" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor ligula.
              </BodyText>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* About and Why Sections */}
      <Grid container spacing={4} justifyContent="center" >
        {/* About Section */}
        <Grid item xs={10} sm={10} md={10}>
          <Box sx={{ minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <About />
          </Box>
        </Grid>

      {/* Why Section */}
      <Grid item xs={10} sm={10} md={10}>
          <Box sx={{minHeight: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <Ratings/>
          </Box>
        </Grid>
    
        

        {/* Why Section */}
        <Grid item xs={10} sm={10} md={10}>
          <Box sx={{minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Why />
          </Box>
        </Grid>
      </Grid>

    </Box>
  );
}

export default Landing;
