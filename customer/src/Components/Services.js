import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, useMediaQuery, useTheme, Button } from '@mui/material';
import interior from './Interior.jpeg'; 
import exterior from './exterior.jpeg'; 

const Services = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        bgcolor: 'whitesmoke', 
        color: 'black', 
        minHeight: '500px', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4, // Padding on the top and bottom
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ color: 'black', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase', fontSize: '25px', textAlign: 'center', marginBottom: '5px' }}>
          Services We Offer
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'whitesmoke', color: 'black' }}>
              <CardMedia
                component="img"
                height="250"
                image={interior}
                alt="Interior Detailing"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Interior Detailing
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Arial, sans-serif', fontSize: isSmallScreen ? '1rem' : '1.2rem' }}>
                  Thorough cleaning including upholstery and carpets.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'whitesmoke', color: 'black' }}>
              <CardMedia
                component="img"
                height="250"
                image={exterior}
                alt="Exterior Detailing"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Exterior Detailing
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Arial, sans-serif', fontSize: isSmallScreen ? '1rem' : '1.2rem' }}>
                  Comprehensive cleaning and restoration of your vehicle's exterior surfaces.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'whitesmoke', color: 'black' }}>
              <CardMedia
                component="img"
                height="250"
                image={interior}
                alt="Paint Protection"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Paint Protection
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Arial, sans-serif', fontSize: isSmallScreen ? '1rem' : '1.2rem' }}>
                  Application of protective coatings to maintain your vehicle's paint finish.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'whitesmoke', color: 'black' }}>
              <CardMedia
                component="img"
                height="250"
                image={exterior}
                alt="Headlight Restoration"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Headlight Restoration
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Arial, sans-serif', fontSize: isSmallScreen ? '1rem' : '1.2rem' }}>
                  Restoration of cloudy or oxidized headlights to improve visibility and aesthetics.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'whitesmoke', color: 'black' }}>
              <CardMedia
                component="img"
                height="250"
                image={interior}
                alt="Wheel and Tire Care"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Wheel and Tire Care
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Arial, sans-serif', fontSize: isSmallScreen ? '1rem' : '1.2rem' }}>
                  Cleaning and treatment of wheels and tires to enhance their appearance and longevity.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'whitesmoke', color: 'black' }}>
              <CardMedia
                component="img"
                height="250"
                image={exterior}
                alt="Detailing Packages"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Detailing Packages
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Arial, sans-serif', fontSize: isSmallScreen ? '1rem' : '1.2rem' }}>
                  Customized packages tailored to meet your specific needs and preferences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="body1" sx={{ textAlign: 'center', mt: 4, fontSize: isSmallScreen ? '1rem' : '1.2rem', fontFamily: 'Arial, sans-serif' }}>
          At Detail Direct, we offer a variety of professional auto detailing services to cater to your needs. From paint protection to headlight restoration, we ensure your vehicle receives the care it deserves.
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button style={{ backgroundColor: '#333', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase', height: '50px' }}>Get a Quote</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
