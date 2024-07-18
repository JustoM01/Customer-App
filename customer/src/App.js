import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Landing from './Pages/Landing';
import Quote from './Pages/Quote';
import Booking from './Pages/Booking';
import Login from './Pages/Login';

import { Box ,ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme'; // ImportS the custom theme
import OurServices from './Pages/OurServices';
import SignUp from './Pages/Signup';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
   <ThemeProvider theme={theme} >
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Nav />
        <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
          <Routes>
    <Route path='/'  Component={Landing} ></Route>
    <Route path='/quote'  Component={Quote} ></Route>
    <Route path='/booking'  Component={Booking} ></Route>
    <Route path='/login'  Component={Login} ></Route>
    <Route path='/services'  Component={OurServices} ></Route>
    <Route path='/signup'  Component={SignUp} ></Route>
    <Route path='/dashboard'  Component={Dashboard} ></Route>
          
          
          
          </Routes>
        </Box>
        <Footer />
      </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
