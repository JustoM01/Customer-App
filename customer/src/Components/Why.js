import React from 'react';
import { Box, Typography, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const WhyDetailDirect = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        bgcolor: 'whitesmoke', // Background color
        color: 'black', // Text color
        minHeight: '500px', // Minimum height of the section
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4, // Padding on the top and bottom
      }}
    >
      <Container sx={{fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase'}} maxWidth="md">
        <Typography variant="h4" sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase',marginBottom:'10px',textAlign: 'center' }}>
          Why Detail Direct?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <CheckCircleOutlineIcon sx={{ fontSize: '3rem', mr: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: isSmallScreen ? '1.2rem' : '1.5rem' }}>
                Focus on Quality
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ fontFamily: 'Arial, sans-serif', fontSize: isSmallScreen ? '1rem' : '1.2rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae urna quis quam vehicula tristique. Donec volutpat eros nec justo vehicula, a feugiat libero convallis.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <CheckCircleOutlineIcon sx={{ fontSize: '3rem', mr: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: isSmallScreen ? '1.2rem' : '1.5rem' }}>
                Customer Service
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ fontFamily: 'Arial, sans-serif', fontSize: isSmallScreen ? '1rem' : '1.2rem' }}>
              Duis eget nisl vel velit tristique feugiat. Nulla facilisi. Suspendisse vel tortor ac nisi vehicula eleifend. Cras id fringilla velit. Sed vitae metus eget dui tincidunt volutpat.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyDetailDirect;
