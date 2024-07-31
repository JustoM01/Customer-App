import React from 'react';
import { Box, Link, Typography, styled } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import YoutubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const logo = require('./Logo.png'); // Ensure the path is correct

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
        position: 'relative',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        bgcolor: '#333', // Same background color as the nav bar
        color: 'white',
        padding: '20px 0', // Vertical padding
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' }, // Stacks items vertically on small screens
          justifyContent: 'space-around',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          borderRadius: '10px',
          padding: '20px',
        }}
      >
        <Box>
          <img src={logo} alt="Detail Direct Logo" style={{ height: '80px', marginBottom: '10px' }} />
        </Box>

        <Box sx={{ mb: { xs: '20px', sm: '0' } }}>
          <QuickLink variant="h6">Socials</QuickLink>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <FooterLink href="#">
                <YoutubeIcon sx={{ color: 'white', fontSize: '2rem' }} />
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#">
                <InstagramIcon sx={{ color: 'white', fontSize: '2rem' }} />
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#">
                <FacebookIcon sx={{ color: 'white', fontSize: '2rem' }} />
              </FooterLink>
            </li>
          </ul>
        </Box>

        <Box sx={{ mb: { xs: '20px', sm: '0' }, ml: { sm: '6px' } }}>
          <QuickLink variant="h6">Quicklinks</QuickLink>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <FooterLink href="#" sx={{ display: 'block', my: 1 }}>
                Home
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#" sx={{ display: 'block', my: 1 }}>
                Get a Quote
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#" sx={{ display: 'block', my: 1 }}>
                About Us
              </FooterLink>
            </li>
          </ul>
        </Box>

        <Box sx={{ ml: { sm: '6px' } }}>
          <QuickLink variant="h6">Contact</QuickLink>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <PhoneIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> (913-602-5435)
            </li>
            <li>
              <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> eliseo101801@gmail.com
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
