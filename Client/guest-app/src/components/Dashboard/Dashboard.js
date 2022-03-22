import React, { useState, useEffect, useRef } from 'react';
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

  let navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage('');
  }, [email, password]);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(email, password);
    setEmail('');
    setPassword('');
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
        </section>
      ) : (
        <Center h="100vh" bg="blackAlpha.400">
          <p
            ref={errRef}
            className={errorMessage ? 'errorMessage' : 'offscreen'}
            aria-live="assertive"
          >
            {' '}
            {errorMessage}{' '}
          </p>
          <FormControl
            w="25%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            borderRadius="1rem"
            boxShadow="2xl"
            bg="gray.100"
            p={7}
            onSubmit={handleSubmit}
          >
            <Heading size="lg">Login</Heading>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              mt={4}
              ref={userRef}
              autoComplete="off"
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
            />
            <InputGroup size="md">
              <Input
                pr="3rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                mt={4}
                mb={8}
                ref={userRef}
                onChange={e => setPassword(e.target.value)}
                value={password}
                required
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
              <Button
                bg="#e77449"
                color="white"
                size="md"
                onClick={() => {
                  navigate('/dashboardPage');
                }}
              >
                Submit
              </Button>
            </Center>
          </FormControl>
        </Center>
      )}
    </>
  );
};

export default Dashboard;
