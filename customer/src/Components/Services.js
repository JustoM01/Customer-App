import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { Zoom } from 'react-awesome-reveal';  // Import Zoom animation
const Hero = require('./exterior.jpeg');

const services = [
  {
    title: 'Steam Treatment',
    description: 'Our carpet steaming service effectively removes deep-seated dirt, stains, and allergens from your vehicle’s carpets. Using steam cleaning technology, we sanitize and refresh the carpets, leaving them clean, soft, and odor-free.',
    image: Hero
  },
  {
    title: 'Interior Detailing',
    description: 'Experience a fresh and clean interior with our detailed interior cleaning service. We deep clean all interior surfaces, including seats, carpets, dashboard, and door panels. This service removes dirt, dust, and allergens, leaving your car’s interior spotless and rejuvenated.',
    image: Hero
  },
  {
    title: 'Exterior Cleaning',
    description: 'Our exterior detailing service goes beyond a simple wash. We meticulously clean and polish every exterior surface of your vehicle, including the body, windows, wheels, and tires. This enhances the appearance and protects your car from environmental elements.',
    image: Hero
  },

];

const Services = () => {
  return (
    <Box sx={{ height: '100%', width: '100%', py: 4 }}>
      <Typography 
        sx={{ fontSize: '2rem', color: 'rgb(233, 30, 99)', fontFamily: 'Oswald, sans-serif', textAlign: 'center', mb: 4 }}
      >
      What We Offer
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={12} md={5} key={index}>
            <Zoom>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography 
                    sx={{ fontSize: '1.25rem', color: 'rgb(233, 30, 99)', fontFamily: 'Oswald, sans-serif', textAlign: 'center' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    sx={{ color: 'black', fontFamily: 'Oswald, sans-serif', textAlign: 'center' }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
