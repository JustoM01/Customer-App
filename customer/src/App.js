import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Landing from './Pages/Landing';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <Landing />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
