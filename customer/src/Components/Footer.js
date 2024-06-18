import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#222',
        color: 'white',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 'auto',
        width: '100%',
        position: 'fixed',
        bottom: '0',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
       
      
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <PhoneIcon sx={{ mr: 1 }} /> (913) 602-5435
        </Typography>
        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <EmailIcon sx={{ mr: 1 }} /> eliseo101801@gmail.com
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Link href="https://www.facebook.com" target="_blank" sx={{ color: 'white', mx: 1 }}>
          <FacebookIcon />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" sx={{ color: 'white', mx: 1 }}>
          <TwitterIcon />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" sx={{ color: 'white', mx: 1 }}>
          <InstagramIcon />
        </Link>
      </Box>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Detail Direct. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
