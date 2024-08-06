import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  styled,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  CardMedia,
} from '@mui/material';


// link and usenav to help redirect and nav
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import hero from './Hero.jpg'; // Importing image directly

const ServiceCard = styled(Card)({
  display: 'flex',
  flexDirection: 'row', // Horizontal alignment
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '8px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const ServicePageContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: '#f0f0f0',
  padding: '20px',
  paddingTop: '40px',
  marginTop: '20px',
});

const FiltersContainer = styled(Box)({
  width: '50%',
  marginRight: '20px',
  marginBottom: '20px',
  '@media (max-width: 768px)': {
    width: '100%',
    marginRight: 0,
  },
});

const ScrollableDiv = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  marginTop: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  maxHeight: '60vh',
  width: '50%',
  '@media (max-width: 768px)': {
    width: '100%',
    maxHeight: 'unset',
  },
});




const OurServices = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);
  const navigate = useNavigate(); // Use useNavigate hook to get navigation function




  // func to redirect after button clicked
  const bookButton = ()=>{
    navigate('/booking');
  }

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services/services');
        // Ensure response.data is an array
        if (Array.isArray(response.data)) {
          setServices(response.data);
          setFilteredServices(response.data); // Initializes filtered services with all services
        } else {
          console.error('Invalid data format received from API');
          setServices([]);
          setFilteredServices([]);
        }
      } catch (err) {
        console.log('Failed to fetch services');
      }
    };

    fetchServices();
  }, []);

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
    filterServices(event.target.value);
  };

  const filterServices = (selectedService) => {
    if (selectedService === '') {
      setFilteredServices(services);
    } else {
      const filtered = services.filter((service) => service.id === selectedService);
      setFilteredServices(filtered);
    }
  };

  return (
    <ServicePageContainer>
      <FiltersContainer>
        <Typography
          variant="h4"
          sx={{ fontFamily: 'Oswald, sans-serif', color: 'rgb(233, 30, 99)', marginTop: '45px' }}
          gutterBottom
        >
          Select a Service
        </Typography>
        <FormControl fullWidth sx={{ marginBottom: '20px' }}>
          <InputLabel variant="filled" sx={{ outlineColor: 'red', color: 'black' }}>
            Service
          </InputLabel>
          <Select value={selectedService} onChange={handleServiceChange} label="Service">
            <MenuItem value="">All Services</MenuItem>
            {services.map((service) => (
              <MenuItem key={service.id} value={service.id}>
                {service.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FiltersContainer>

      <ScrollableDiv>
        {filteredServices.map((service) => (
          <ServiceCard key={service.id}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                paddingX: { xs: '10px', sm: '20px' },
                paddingY: { xs: '10px', sm: '20px' },
              }}
            >
              <CardMedia
                component="img"
                image={hero} // Use imported image directly
                alt="Service Image"
                sx={{
                  width: { xs: '100%', sm: '50%' },
                  height: { xs: 'auto', sm: '170px' },
                  borderRadius: '8px',
                  marginBottom: { xs: '20px', sm: '0' },
                  marginTop: { md: '10px' },
                }}
              />
              <Box sx={{ flex: 1, marginLeft: { xs: 0, sm: '20px' } }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {service.name}
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ marginBottom: '10px' }}>
                  {service.description}
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgb(233, 30, 99)' }}>
                  Starting at ${service.price}
                </Typography>
                <Button
                  sx={{
                    backgroundColor: 'rgb(233, 30, 99)',
                    color: 'white',
                    width: '100%',
                    marginTop: '20px',
                  }}

                  onClick={bookButton}
                >
                  Book Now
                </Button>
              </Box>
            </CardContent>
          </ServiceCard>
        ))}
      </ScrollableDiv>
    </ServicePageContainer>
  );
};

export default OurServices;
