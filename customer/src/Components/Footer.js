import React from 'react';
import { Box, Link, Typography, styled } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

// Styled component for footer links
const FooterLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  fontSize: '16px',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const QuickLink = styled(Typography)(({ theme }) => ({
  color: 'rgb(233, 30, 99)',
  textDecoration: 'none',
  fontSize: '26px',
  fontFamily: 'Oswald, sans-serif',
}));

const Footer = () => {
  return (
    <Box
      sx={{

       
        bottom: 0,
        width: '100%',
        textAlign: 'center', // Center align content horizontally,
        
     
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          maxWidth: '1200px', // Limit the maximum width of the content
          margin: '0 auto', // Center the box horizontally
          bgcolor:'white',
          borderRadius: '10px', // Rounded corners for the footer box
          p: '20px', // Padding inside the footer box
        }}
      >
        <Box  >
          <QuickLink variant="h6">Quicklinks</QuickLink>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <FooterLink href="#" sx={{ display: 'block', my: 1, color:'black' }}>
                Contact us
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#" sx={{ display: 'block', my: 1 ,color:'black'}}>
                Contact us
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#" sx={{ display: 'block', my: 1 , color:'black'}}>
                Contact us
              </FooterLink>
            </li>
          </ul>
        </Box>

        <Box>
          <FooterLink href="tel:+1234567890" sx={{ display: 'block', mb: 2, color:'black' }}>
            <PhoneIcon sx={{ mr: 1 }} fontSize="large" /> (123) 456-7890
          </FooterLink>
          <FooterLink sx={{color:'black'}} href="mailto:info@example.com">
            <EmailIcon sx={{ mr: 1 }} fontSize="large" /> info@example.com
          </FooterLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
