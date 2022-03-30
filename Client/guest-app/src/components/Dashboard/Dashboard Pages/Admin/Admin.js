import React, { useState } from 'react';
import {
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import { BiHide, BiShow } from 'react-icons/bi';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Admin login
const Admin = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const toast = useToast();

  const navigate = useNavigate();

  const handleInputChange = e => {
    const value = e.target.value;

    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const userEmail = state.email;
  const password = state.password;

  const handleLogin = async () => {
    if (!userEmail || !password) {
      toast({
        title: 'Fill all fields',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
      return;
    }

    try {
      const { data } = await axios.post(
        '/admin',
        { userEmail, password },
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      );
      console.log(data);

      if (data === 'Logged in') {
        toast({
          title: 'Login successful',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
        navigate('/adminPage');
      }
    } catch (err) {
      toast({
        title: 'Failed login',
        description: err.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  console.log(userEmail);
  console.log(password);

  return (
    <Center h="100vh" bg="blackAlpha.400">
      <FormControl
        w="25%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        borderRadius="1rem"
        boxShadow="2xl"
        bg="gray.100"
        p={7}
      >
        <Heading size="lg">Login</Heading>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          mt={4}
          onChange={handleInputChange}
        />
        <InputGroup size="md">
          <Input
            name="password"
            pr="3rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            mt={4}
            mb={8}
            onChange={handleInputChange}
          />
          <InputRightElement
            width="3rem"
            h="4.5rem"
            size="sm"
            onClick={handleClick}
          >
            {show ? <BiShow /> : <BiHide />}
          </InputRightElement>
        </InputGroup>
        <Center>
          <Button bg="#e77449" color="white" size="md" onClick={handleLogin}>
            Submit
          </Button>
        </Center>
      </FormControl>
    </Center>
  );
};

export default Admin;
