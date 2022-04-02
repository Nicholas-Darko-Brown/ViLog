import {
  ChakraProvider,
  Box
} from '@chakra-ui/react';
import BootsrapCarousel from './components/Carousel.js/BootstrapCarousel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import DashboardPage from './components/Dashboard/DashboardPage';
import Host from './components/Dashboard/Dashboard Pages/Host/Host';
import Admin from './components/Dashboard/Dashboard Pages/Admin/Admin';
import AdminPage from './components/Dashboard/Dashboard Pages/Admin/AdminPage/AdminPage'
import Report from './components/Dashboard/Dashboard Components/Reports/Report';
import Login from './components/Login/Login';
import SignedIn from './components/SignedIn/SignedIn';
import Forms from './components/Forms/Forms';

// Routes to various pages
const App = () => {
  return (
    <ChakraProvider>
      <Box>
      <Router>
        <Routes>
          <Route path='/' element={<BootsrapCarousel />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/dashboardPage' element={<DashboardPage />}></Route>
          <Route path='/host' element={<Host />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/adminPage' element={<AdminPage />}></Route>
          <Route path='/reports' element={<Report />}></Route>
          <Route path='/visitorLogin' element={<Login />}></Route>
          <Route path='/signedIn' element={<SignedIn />}></Route>
          <Route path='/signUp' element={<Forms />} ></Route>
        </Routes>
      </Router>
        
      </Box>
    </ChakraProvider>
  );
}

export default App;
