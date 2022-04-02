import { Box, Button, FormControl, Input, InputGroup, InputRightElement, Select, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { BiHide, BiShow } from 'react-icons/bi';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [employee, setEmployee] = useState([]);
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const toast = useToast()

    const handleClick = () => setShow(!show);

    const fetchEmployeesData = async () => {
      const { data } = await axios.get('https://viilogg.herokuapp.com/adminPage/employeeList');
      setEmployee(data);
    };
  
    useEffect(() => {
      fetchEmployeesData();
    }, []);
  
    // Get check in time
    const timestamp = new Date(Date.now()).toISOString();
  
    const url = 'https://viilogg.herokuapp.com/visitorLogin';
    const [data, setData] = useState({
      email: '',
      password: '',
      position: '',
    });
    console.log(data)
  
  
    const handleChange = e => {
      const newData = { ...data };
      newData[e.target.id] = e.target.value;
      setData(newData);
    };

    const userEmail = data.email;
    const password = data.password;
    const position = data.position;
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newData = Object.assign(data, {timestamp: timestamp})
  
      if(!userEmail || !password || !position){
        toast({
          title: 'Fill all fields',
          status: 'warning',
          duration: 3000,
          isClosable: true,
          position: 'top',
        })
        return;
      }

      try {
        const {data} = await axios.post(url, newData, {
          headers: {
            'Content-type': 'application/json'
          }
        })

        if (data) {
          toast({
            title: 'Login successful',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top',
          });
  
          navigate('/signedIn');
        }

      } catch (error) {
        toast({
          title: 'Failed login',
          description: error.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
      }
    };



  return (
    <Box display="flex" justifyContent="center" alignItems='center' height="100vh">
    <FormControl
      isRequired
      w="30%"
      p={5}
      m={5}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      borderRadius="1rem"
      boxShadow="2xl"
      bg="orange.120"
    >
      <Text
        fontSize="1.2em"
        fontWeight="extrabold"
        textTransform="uppercase"
        letterSpacing="2px"
        textAlign="center"
        mb={2}
      >
        Login
      </Text>

      <Input
        onChange={e => handleChange(e)}
        value={data.email}
        type="email"
        id="email"
        mt={2}
        placeholder="Email"
        required='required'
      />
      <InputGroup size='md'>
      <Input
        onChange={e => handleChange(e)}
        type={show ? 'text' : 'password'}
        value={data.password}
        id="password"
        mt={2}
        placeholder="Password"
        required='required'
      />
      <InputRightElement width='4.5rem' h='3.5rem' onClick={handleClick}>
          {show ? <BiShow /> : <BiHide />}
      </InputRightElement>
      </InputGroup>

      <Select
        onChange={e => handleChange(e)}
        value={data.position}
        isRequired
        id="position"
        placeholder="Select your position"
        mt={2}
        required='required'
      >
        <option value="visitor">Visitor</option>
        <option value="contractor">Contractor</option>
      </Select>
      <Select
        onChange={e => handleChange(e)}
        value={data.host}
        isRequired
        id="host"
        placeholder="Who are you visiting?"
        mt={2}
      >
        {employee ? (
          employee.map(name => {
            return <option value={name.Id}>{name.Full_Name}</option>;
          })
        ) : null}
      </Select>

      <Button
        onClick={handleSubmit}
        type="submit"
        colorScheme="orange"
        variant="solid"
        mt={4}
      >
        Login
      </Button>

      <Text textAlign='center' mt={3}>Don't have an account? <button onClick={() => {
        navigate("/signUp")
      }} style={{fontWeight: 900, color: 'blue', textDecoration: 'underline'}}>Sign up</button> here</Text>
    </FormControl>
  </Box>
  )
}

export default Login