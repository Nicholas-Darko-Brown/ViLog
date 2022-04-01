import React, { useState, useEffect } from 'react';
import {
  FormControl,
  Input,
  Select,
  Button,
  Text,
  Box,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { BiHide, BiShow } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import './Forms.css';

// Visitor submission form
const Forms = () => {
  const [employee, setEmployee] = useState([]);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const toast = useToast();

  const navigate = useNavigate();

  const fetchEmployeesData = async () => {
    const { data } = await axios.get('/adminPage/employeeList');
    setEmployee(data);
  };

  useEffect(() => {
    fetchEmployeesData();
  }, []);

  // Get check in time
  const timestamp = new Date(Date.now()).toISOString();

  const url = '/';
  const [data, setData] = useState({
    name: '',
    company: '',
    tel: '',
    email: '',
    password: '',
    position: '',
  });

  const handleChange = e => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const visitorName = data.name;
  const visitorCompany = data.company;
  const visitorPhone = data.tel;
  const visitorEmail = data.email;
  const visitorPassword = data.password;
  const visitorPosition = data.position;
  const visitorHost = data.host;

  const handleSubmit = async e => {
    e.preventDefault();
    const newData = Object.assign(data, { timestamp: timestamp });

    if (
      !visitorName ||
      !visitorCompany ||
      !visitorPhone ||
      !visitorEmail ||
      !visitorPassword ||
      !visitorPosition ||
      !visitorHost
    ) {
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
      const { data } = await axios.post(url, newData);

      if (data) {
        toast({
          title: 'Sign up successful',
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
    <Box
      display="flex"
      justifyContent="center"
      height="100%"
      className="form_container"
    >
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
      >
        <Text
          fontSize="1.2em"
          fontWeight="extrabold"
          textTransform="uppercase"
          letterSpacing="2px"
          textAlign="center"
          mb={5}
        >
          Tell us about yourself
        </Text>

        <Input
          onChange={e => handleChange(e)}
          value={data.name}
          type="text"
          id="name"
          placeholder="Full name"
          required="required"
        />
        <Input
          onChange={e => handleChange(e)}
          value={data.company}
          type="text"
          id="company"
          mt={2}
          placeholder="Company"
          required="required"
        />
        <Input
          onChange={e => handleChange(e)}
          value={data.tel}
          type="tel"
          id="tel"
          mt={2}
          placeholder="Phone"
          required="required"
        />
        <Input
          onChange={e => handleChange(e)}
          value={data.email}
          type="email"
          id="email"
          mt={2}
          placeholder="Email"
          required="required"
        />
        <InputGroup size="md">
          <Input
            onChange={e => handleChange(e)}
            value={data.password}
            id="password"
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Password"
            required="required"
            mt={2}
          />
          <InputRightElement width="3rem" h="3.5rem" onClick={handleClick}>
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
          required="required"
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
          onClick={e => handleSubmit(e)}
          type="submit"
          colorScheme="orange"
          variant="solid"
          mt={4}
        >
          Sign Up
        </Button>

        <Text textAlign="center" m={5}>
          Already signed up?{' '}
          <span>
            {' '}
            <button
              style={{
                fontWeight: 900,
                textDecoration: 'underline',
                color: 'blue',
              }}
              onClick={() => {
                navigate('/visitorLogin');
              }}
            >
              Login
            </button>{' '}
          </span>{' '}
          here
        </Text>
      </FormControl>
    </Box>
  );
};

export default Forms;
