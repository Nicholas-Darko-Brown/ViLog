import React from 'react';
import {
  ChakraProvider,
  Box
} from '@chakra-ui/react';
import BootsrapCarousel from './components/Carousel.js/BootstrapCarousel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Logout from './components/Logout/Logout';
// import Error from './components/ErrorPage/Error';
import DashboardPage from './components/Dashboard/DashboardPage';
import Host from './components/Dashboard/Dashboard Pages/Host/Host';
import Edit from './components/Dashboard/Dashboard Pages/Edit/Edit';
import NewUser from './components/Dashboard/Dashboard Pages/New User/NewUser';
import Admin from './components/Dashboard/Dashboard Pages/Admin/Admin';
import AdminPage from './components/Dashboard/Dashboard Pages/Admin/AdminPage/AdminPage';
import EmployeeEdit from './components/Dashboard/Dashboard Pages/Edit/EmployeeEdit/EmployeeEdit';
import NewEmployeeUser from './components/Dashboard/Dashboard Pages/New User/NewEmployeeUser/NewEmployeeUser'

const App = () => {
  return (
    <ChakraProvider>
      <Box>
      <Router>
        <Routes>
          <Route path='/' element={<BootsrapCarousel />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
          {/* <Route path='*' element={<Error />}></Route> */}
          <Route path='/dashboardPage' element={<DashboardPage />}></Route>
          <Route path='/host' element={<Host />}></Route>
          <Route path='/edit/:editId' element={<Edit />}></Route>
          <Route path='/newUser' element={<NewUser />}></Route>

          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/adminPage' element={<AdminPage />}></Route>
          <Route path='/employeeEdit/:employeeEdit' element={<EmployeeEdit />}></Route>
          <Route path='/newEmployeeUser' element={<NewEmployeeUser />}></Route>
        </Routes>
      </Router>
        
      </Box>
    </ChakraProvider>
  );
}

export default App;
