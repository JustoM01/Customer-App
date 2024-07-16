import { Typography } from '@mui/material'
import React from 'react'
import {Box, Link, styled} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom



const HeaderOne = styled(Typography)(({ theme }) => ({
    color: 'white',
    textDecoration: 'none',
    fontSize: '26px',
    fontFamily: 'Oswald, sans-serif',
    marginRight:'1px'
   
  }));





//    PRESTYLED MUI Component
const NavLink = styled(Link)(({ theme }) => ({
    color: 'rgb(233, 30, 99)',
    textDecoration: 'none',
    fontSize: '16px',
    fontFamily: 'Oswald, sans-serif', 
    '&:hover': {
      textDecoration: 'overline',
      color:'red'
    },
  }));
const Nav = () => {
  return (                              // ALIGNS ITEMS IN MIDDLE W SPACE IN BEWTEEN THEM THEN SOME PADDING 
   <Box sx={{display:'flex',alignItems:'center',    padding: '10px 30px',    bgcolor: '#333',
    color: 'white',height:{xs:'9vh',sm:'7v',md:'7vh'},position: 'fixed', 
    top: 0,
    
    width: '100%',
    zIndex: 1000, }}>
<HeaderOne component={RouterLink} to="/"  >Detail Direct</HeaderOne>
  <NavLink component={RouterLink} to="/services"  style={{marginLeft:'3%'}}  >Services</NavLink>
    <NavLink component={RouterLink} to="/quote"  style={{marginLeft:'2%'}}  >Quote</NavLink>
    <NavLink component={RouterLink} to="/booking"  style={{marginLeft:'2%'}}  >Booking</NavLink>
    <NavLink component={RouterLink} to="/login"  style={{marginLeft:'2%'}}  >LogIn</NavLink>
   </Box>
  )
}

export default Nav