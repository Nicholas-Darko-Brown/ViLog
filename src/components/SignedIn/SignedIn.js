import React from 'react';
import './SignedIn.css'
import { Text, Box } from '@chakra-ui/react';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = { timestamp: timestamp };
    console.log(newData)

    await axios.put(`/updateVisit/${newData}`, newData)

    localStorage.clear()

    navigate("/visitorLogin")
  };

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="3rem"
      className='signIn_container'
    >
      <Box display="flex" alignItems="center" gap="2rem" color="white">
        <Text fontSize="5xl" fontWeight="bold">
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
        <Text fontSize="1.1em" fontWeight="normal" fontStyle="italic" color="white">
          <p id="message" ></p>
        </Text>

        <button onClick={handleSubmit} className='logout_btn' style={{ backgroundColor: 'red', padding: '10px 30px', borderRadius: '10px', color: 'white', fontWeight: 900, marginTop: '1.5rem', letterSpacing: '1.5px'}}>Logout</button>
      </Box>
    </Box>
  );
};

export default SignedIn;
