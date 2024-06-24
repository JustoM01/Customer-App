import React from 'react';
import { Box, Typography, Link, useMediaQuery, useTheme } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

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
        width: '100%',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 1 }}>
        <Typography
          variant="body1"
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 1,
            fontSize: isSmallScreen ? '0.8rem' : isMediumScreen ? '1rem' : '1.2rem',
          }}
        >
          <PhoneIcon sx={{ mr: 1 }} /> (913) 602-5435
        </Typography>
        <Typography
          variant="body1"
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 1,
            fontSize: isSmallScreen ? '0.8rem' : isMediumScreen ? '1rem' : '1.2rem',
          }}
        >
          <EmailIcon sx={{ mr: 1 }} /> eliseo101801@gmail.com
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Link href="https://www.facebook.com" target="_blank" sx={{ color: 'white', mx: 1 }}>
          <FacebookIcon sx={{ fontSize: isSmallScreen ? '1rem' : isMediumScreen ? '1.2rem' : '1.5rem' }} />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" sx={{ color: 'white', mx: 1 }}>
          <TwitterIcon sx={{ fontSize: isSmallScreen ? '1rem' : isMediumScreen ? '1.2rem' : '1.5rem' }} />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" sx={{ color: 'white', mx: 1 }}>
          <InstagramIcon sx={{ fontSize: isSmallScreen ? '1rem' : isMediumScreen ? '1.2rem' : '1.5rem' }} />
        </Link>
      </Box>
      <Typography
        variant="body2"
        sx={{
          fontSize: isSmallScreen ? '0.6rem' : isMediumScreen ? '0.8rem' : '1rem',
        }}
      >
        &copy; {new Date().getFullYear()} Detail Direct. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
