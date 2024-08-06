import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, styled ,Button} from '@mui/material';
import { Zoom } from 'react-awesome-reveal';

// Ensure the path is correct
const Hero = require('./exterior.jpeg');

const services = [
  {
    title: 'Steam Treatment',
    description: 'Our carpet steaming service effectively removes deep-seated dirt, stains, and allergens from your vehicle’s carpets. Using steam cleaning technology, we sanitize and refresh the carpets, leaving them clean, soft, and odor-free.',
    image: Hero,
    alt: 'Steam treatment service showing clean carpets',
  },
  {
    title: 'Interior Detailing',
    description: 'Experience a fresh and clean interior with our detailed interior cleaning service. We deep clean all interior surfaces, including seats, carpets, dashboard, and door panels. This service removes dirt, dust, and allergens, leaving your car’s interior spotless and rejuvenated.',
    image: Hero,
    alt: 'Interior detailing service for cars',
  },
  {
    title: 'Exterior Cleaning',
    description: 'Our exterior detailing service goes beyond a simple wash. We meticulously clean and polish every exterior surface of your vehicle, including the body, windows, wheels, and tires. This enhances the appearance and protects your car from environmental elements.',
    image: Hero,
    alt: 'Exterior cleaning service for vehicles',
  },
];

// Styled component for service titles
const ServiceTitle = styled(Typography)(({ theme }) => ({
  color: 'rgb(233, 30, 99)',
  fontFamily: 'Oswald, sans-serif',
  textAlign: 'center',
  marginBottom: '16px',
}));

// Styled component for service descriptions
const ServiceDescription = styled(Typography)(({ theme }) => ({
  color: 'black',
  fontFamily: 'Roboto, sans-serif',
  textAlign: 'center',
  lineHeight: 1.6,
}));



// Styled component for call-to-action button
const ServiceButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: 'rgb(233, 30, 99)',
  color: 'white',
  fontFamily: 'Oswald, sans-serif',
  fontSize: '.8rem',
  '&:hover': {
    backgroundColor: 'rgb(203, 27, 87)',
  },
}));

const Services = () => {
  return (
    <Box sx={{ height: '100%', width: '100%', py: 6, bgcolor: '#f4f4f4' }}>
      <Typography 
        sx={{ 
          fontSize: '2.5rem', 
          color: 'rgb(233, 30, 99)', 
          fontFamily: 'Oswald, sans-serif', 
          textAlign: 'center', 
          mb: 6,
        }}
      >
        Some of Our Services
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Zoom>
              <Card 
                   component="article" 
                sx={{
                  maxWidth: 350,
                  mx: 'auto',
                  bgcolor: 'white',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: 2,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <ServiceTitle variant="h5">
                    {service.title}
                  </ServiceTitle>
                  <ServiceDescription>
                    {service.description}
                  </ServiceDescription>
           <ServiceButton>Book</ServiceButton>
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
