import React from 'react';
import {
  ChakraProvider,
  Box
} from '@chakra-ui/react';
import BootsrapCarousel from './components/Carousel.js/BootstrapCarousel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Logout from './components/Logout/Logout';

const App = () => {
  return (
    <ChakraProvider>
      <Box>
      <Router>
        <Routes>
          <Route path='/' element={<BootsrapCarousel />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
        </Routes>
      </Router>
        
      </Box>
    </ChakraProvider>
  );
}

export default App;
