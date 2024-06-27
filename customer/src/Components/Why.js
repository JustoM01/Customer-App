import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { Zoom } from 'react-awesome-reveal';  // Import Zoom animation
const Hero = require('./exterior.jpeg');

const services = [
  {
    title: 'Exterior Detailing',
    description: 'Comprehensive exterior cleaning and polishing.',
    image: Hero
  },
  {
    title: 'Interior Detailing',
    description: 'Thorough cleaning of interior surfaces.',
    image: Hero
  },
  {
    title: 'Engine Cleaning',
    description: 'Deep cleaning of engine bay.',
    image: Hero
  },
  {
    title: 'Paint Correction',
    description: 'Restoring paintwork to its original glory.',
    image: Hero
  }
];

const Why = () => {
  return (
    <Box sx={{ height: '100%', width: '100%', py: 4 }}>
      <Typography 
        sx={{ fontSize: '2rem', color: 'rgb(233, 30, 99)', fontFamily: 'Oswald, sans-serif', textAlign: 'center', mb: 4 }}
      >
        Our Services
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

export default Why;
