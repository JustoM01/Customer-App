import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Landing from './Pages/Landing';

import { Box ,ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme'; // ImportS the custom theme

function App() {
  return (
    <Router>
   <ThemeProvider theme={theme} >
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Nav />
        <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
          <Routes>
    <Route path='/'  Component={Landing} ></Route>
          
          </Routes>
        </Box>
        <Footer />
      </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
