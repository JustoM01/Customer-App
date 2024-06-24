import React from 'react';
import { Box, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
import About from '../Components/About';
import hero from './Hero.mp4';
import Services from '../Components/Services'
import Why from '../Components/Why'
const Landing = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      <Box sx={{ position: 'relative', overflow: 'hidden', height: '50vh', width: '100%', marginTop: '103px' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            transform: 'translate(-50%, -50%)', 
            zIndex: -1 
          }}
        >
          <source src={hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%', 
            color: 'white',
            zIndex: 1,
            textAlign: 'center',
            width: '100%'
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
            fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase',
              fontSize: isSmallScreen ? '2rem' : isMediumScreen ? '3rem' : '4rem'
            }}
          >
            Welcome to Detail Direct
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
                fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase',
              mb: 4,
              fontSize: isSmallScreen ? '1rem' : isMediumScreen ? '1.5rem' : '2rem'
            }}
          >
            Providing the best services for all your needs
          </Typography>
        </Container>
      </Box>
      <Box>
        <About />
      </Box>
      <Box><Services></Services> </Box>
      <Box><Why></Why> </Box>
    </Box>
  );
};

export default Landing;
