import { Typography } from '@mui/material'
import React from 'react'
import {Box, Link, styled} from '@mui/material'




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
    color: 'white',height:'7vh',position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000, }}>
<HeaderOne>Detail Direct</HeaderOne>
    <ul style={{marginLeft:'0%'}} ><NavLink style={{marginLeft:'6%'}}  >Services</NavLink></ul>
    <NavLink style={{marginLeft:'6%'}}  >Quote</NavLink>
    <NavLink style={{marginLeft:'6%'}}  >About Us</NavLink>
   </Box>
  )
}

export default Nav