import React from 'react';
import { Text, Box, Image, Button } from '@chakra-ui/react';
import Done from '../../assets/done.png';
import User from '../../assets/user.png';

const SignedIn = () => {
  return (
    <Box
      height="100vh"
      border="1px solid blue"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="3rem"
    >
      <Box
        display="flex"
        alignItems="center"
        gap="2rem"
        border="1px solid blue"
      >
        <Image src={Done} alt="done" />
        <Text fontSize="1.2em" fontWeight="bold">
          Signed-In!
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        border="1px solid blue"
        gap="2rem"
      >
        <Text fontSize="1.1em" fontWeight="normal" fontStyle="italic">
          Contacting your Host...
        </Text>
        <Image src={User} alt="done" border="1px solid red" w="5rem" />
      </Box>
      <Box >
        <Button colorScheme="red" size="lg">
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default SignedIn;
