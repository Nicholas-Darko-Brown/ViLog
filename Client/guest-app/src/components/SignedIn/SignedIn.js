import React from 'react';
import { Text, Box, Image } from '@chakra-ui/react';
import Done from '../../assets/done.png';
import User from '../../assets/user.png';
import './SignedIn.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Signed In
const SignedIn = () => {


  const handleMessage = () => {
    document.getElementById("message").textContent = "Please wait, contacting your host in no time..."
  }

  setTimeout(handleMessage, 5000)

  const handleConfirmedMessage = () => {
    document.getElementById("message").textContent = "Your host has been notified. Kindly wait for him/her"
  }

  setTimeout(handleConfirmedMessage, 10000)

  const navigate = useNavigate()

  const timestamp = new Date(Date.now()).toISOString();
  // console.log(timestamp)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { timestamp: timestamp };
    console.log(newData)

    axios.put(`/updateVisit/${newData}`, newData)

    navigate("/")
  };

  


  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="3rem"
    >
      <Box display="flex" alignItems="center" gap="2rem">
        <Image src={Done} alt="done" />
        <Text fontSize="1.2em" fontWeight="bold">
          Logged-In!
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="2rem"
      >
        <Text fontSize="1.1em" fontWeight="normal" fontStyle="italic">
          <p id="message" ></p>
        </Text>
        <Image src={User} alt="done" w="5rem" />

        <button onClick={handleSubmit} className='logout_btn' style={{ backgroundColor: 'red', padding: '10px 20px', borderRadius: '10px', color: 'white', fontWeight: 600}}>Logout</button>
      </Box>
    </Box>
  );
};

export default SignedIn;
