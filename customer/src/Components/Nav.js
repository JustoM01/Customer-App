import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


const Nav = () => {

    // use state var to dynamically update anchor element 
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


//   creating materila ui theme to help me w size responsive
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: '#333', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#DC143C',fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase', fontSize:'25px' }}>
            Detail Direct
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleClick}
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
        <Box
          sx={{
            bgcolor: '#DC143C',
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            p: 1,
            position: 'fixed',
            width: '100%',
            top: '55px',
            zIndex: 1100,
            height: '30px',
            backdropFilter: 'blur(10px)', // Cool effect for modern look
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)', 
           
          }}
        >
          <Typography
            variant="body1"
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: isSmallScreen ? '12px' : '14px',
              m: isSmallScreen ? '4px 0' : '0 20px',
              color: 'white',
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            <PhoneIcon sx={{ fontSize: isSmallScreen ? '18px' : '20px', mr: 1 }} />
            Contact Us Phone: (913) 602-5435
          </Typography>
          <Typography
            variant="body1"
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: isSmallScreen ? '12px' : '14px',
              m: isSmallScreen ? '4px 0' : '0 20px',
              color: 'white',
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            <EmailIcon sx={{ fontSize: isSmallScreen ? '18px' : '20px', mr: 1 }} />
            Email: eliseo101801@gmail.com
          </Typography>
        </Box>
      </AppBar>
    </div>
  );
};

export default Nav;
