import React, { useState } from 'react';
import {
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { BiHide, BiShow } from 'react-icons/bi';

import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  let navigate = useNavigate()

  return (
    <Center h="100vh" bg='blackAlpha.400'>
      <FormControl
        w="25%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        borderRadius="1rem"
        boxShadow="2xl"
        bg='gray.100'
        p={7}
      >
        <Heading size="lg">Login</Heading>
        <Input id="email" type="email" placeholder="Enter your email" mt={4}/>
        <InputGroup size="md">
          <Input
            pr="3rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            mt={4}
            mb={8}
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
          <Button bg="#e77449" color='white' size="md" onClick={() => {
            navigate('/dashboardPage')
          }}>
            Submit
          </Button>
        </Center>
      </FormControl>
    </Center>
  );
};

export default Dashboard;
