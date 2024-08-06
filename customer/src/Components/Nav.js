import React, { useState } from 'react';
import { Box, Link, styled, Drawer, IconButton, MenuItem, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'; // Import icons

const logo = require('./Logo.png');

const NavLink = styled(Link)(({ theme }) => ({
  color: 'rgb(233, 30, 99)',
  textDecoration: 'none',
  fontSize: '26px',
  fontFamily: 'Oswald, sans-serif',
  '&:hover': {
    textDecoration: 'overline',
    color: 'red',
  },
}));

const Nav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = (
    <Box sx={{ width: '100%', height: '100%', bgcolor: '#333',   fontFamily: 'Oswald, sans-serif',color:'white',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <IconButton onClick={toggleDrawer(false)} sx={{ color: 'white', position: 'absolute', top: 20, right: 20 }}>
        <CloseIcon />
      </IconButton>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <MenuItem onClick={toggleDrawer(false)} component={RouterLink} to="/">Home</MenuItem>
        <MenuItem onClick={toggleDrawer(false)} component={RouterLink} to="/services">Services</MenuItem>
        <MenuItem onClick={toggleDrawer(false)} component={RouterLink} to="/quote">Quote</MenuItem>
        <MenuItem onClick={toggleDrawer(false)} component={RouterLink} to="/booking">Booking</MenuItem>
        <MenuItem onClick={toggleDrawer(false)} component={RouterLink} to="/login">LogIn</MenuItem>
      </Box>
    </Box>
  );

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      padding: '10px 30px',
      bgcolor: '#333',
      color: 'white',
      height: { xs: '9vh', sm: '7vh', md: '7vh' },
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      justifyContent: isMobile ? 'space-between' : 'space-around',
    }}>
      <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Detail Direct Logo" style={{ height: '90px', marginRight: '10px' }} />
      </Box>

      {isMobile ? (
        <>
          <IconButton
            size='larger'
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(true)}
            sx={{ color: 'white', marginRight:'14%',  }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{ '& .MuiDrawer-paper': { width: '100%', height: '100%',   color:'red' } }}
          >
            {menuItems}
          </Drawer>
        </>
      ) : (
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '10%' }}>
          <NavLink component={RouterLink} sx={{ marginRight: '30px' }} to="/services">Services</NavLink>
          <NavLink component={RouterLink} sx={{ marginRight: '30px' }} to="/quote">Quote</NavLink>
          <NavLink component={RouterLink} sx={{ marginRight: '30px' }} to="/booking">Booking</NavLink>
          <NavLink component={RouterLink} sx={{ marginRight: '30px' }} to="/login">LogIn</NavLink>
        </Box>
      )}
    </Box>
  );
};

export default Nav;
