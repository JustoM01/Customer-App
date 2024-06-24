import React from 'react';
import { Box, Typography, Container, useMediaQuery, useTheme } from '@mui/material';

const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        bgcolor: 'whitesmoke', 
        color: 'white', 
        minHeight: '500px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4, 
      }}
    >

      <Container sx={{color:'black'}} maxWidth="md">
        <Typography variant="h4" sx={{fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase', fontSize:'25px',marginBottom:'5px', textAlign: 'center' }}>
          About Detail Direct
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase',textAlign: 'center', fontSize: isSmallScreen ? '1rem' : '1.2rem' }}>
          Welcome to Detail Direct, where personalized service meets exceptional auto detailing. As the sole
          operator, I take pride in offering meticulous detailing services right here in Kc area.
        </Typography>
  
        <Typography variant="body1" sx={{fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase', textAlign: 'center', mt: 2, fontSize: isSmallScreen ? '1rem' : '1.2rem' }}>
          At Detail Direct, customer satisfaction is paramount. I strive to build lasting relationships with my
          clients through transparent communication and reliable service. Your car is in good hands with [Your Name].
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
