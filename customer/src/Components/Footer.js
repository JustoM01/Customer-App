import React from 'react';
import { Box, Link, Typography, styled } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook'; // Example import for Facebook icon
import YoutubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'; // Example import for Instagram icon

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
          <QuickLink variant="h6">Socials</QuickLink>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <YoutubeIcon></YoutubeIcon>
            </li>
            <li>
              <InstagramIcon></InstagramIcon>
            </li>
            <li>
             <FacebookIcon></FacebookIcon>
            </li>
          </ul>
        </Box>




        <Box sx={{ml:'6px'}} >
          <QuickLink variant="h6">Quicklinks</QuickLink>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <FooterLink href="#" sx={{ display: 'block', my: 1, color:'black' }}>
                Home
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#" sx={{ display: 'block', my: 1 ,color:'black'}}>
                Get a Quote
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#" sx={{ display: 'block', my: 1 , color:'black'}}>
                About Us
              </FooterLink>
            </li>
          </ul>
        </Box>




        
        <Box sx={{ml:'6px'}} >
          <QuickLink variant="h6">Contact</QuickLink>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <PhoneIcon></PhoneIcon> (913-602-5435)
            </li>

            <li>
              <EmailIcon></EmailIcon> eliseo101801@gmail.com
            </li>
            
          </ul>
        </Box>

       
      </Box>
    </Box>
  );
};

export default Footer;
