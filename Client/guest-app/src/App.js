import React from 'react';
import {
  ChakraProvider,
  Box
} from '@chakra-ui/react';
import BootsrapCarousel from './components/Carousel.js/BootstrapCarousel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Logout from './components/Logout/Logout';
import Error from './components/ErrorPage/Error';
import DashboardPage from './components/Dashboard/DashboardPage';
import Host from './components/Dashboard/Dashboard Pages/Host/Host';

const App = () => {
  return (
    <ChakraProvider>
      <Box>
      <Router>
        <Routes>
          <Route path='/' element={<BootsrapCarousel />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
          <Route path='*' element={<Error />}></Route>
          <Route path='/dashboardPage' element={<DashboardPage />}></Route>
          <Route path='/host' element={<Host />}></Route>
        </Routes>
      </Router>
        
      </Box>
    </ChakraProvider>
  );
}

export default App;
