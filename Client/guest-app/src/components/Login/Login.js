import { Box, Button, FormControl, Input, InputGroup, InputRightElement, Select, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { BiHide, BiShow } from 'react-icons/bi';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { useNavigate } from 'react-router-dom';

toast.configure()
const Login = () => {
    const [employee, setEmployee] = useState([]);
    const [show, setShow] = useState(false);
    // const [visitor, setVisitor] = useState([])
    const handleClick = () => setShow(!show);

    const fetchEmployeesData = async () => {
      const { data } = await axios.get('/adminPage/employeeList');
      setEmployee(data);
    };
  
    // const navigate = useNavigate()
  
    useEffect(() => {
      fetchEmployeesData();
    }, []);
  
    // Get check in time
    const timestamp = new Date(Date.now()).toISOString();
    // console.log(timestamp)
  
    const url = '/visitorLogin';
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
      console.log(newData)
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      const newData = Object.assign(data, {timestamp: timestamp})
      console.log(newData)
  
      axios.post(url, newData).then(function (response) {
        console.log(response)
      })

      // navigate('/signedIn')
    };



  return (
    <Box display="flex" justifyContent="center" height="100%" mt={20}>
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
        mb={5}
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
        ) : (
          <option value="yvonne smith">Yvonne Smith</option>
        )}

        {/*  */}
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
    </FormControl>
  </Box>
  )
}

export default Login