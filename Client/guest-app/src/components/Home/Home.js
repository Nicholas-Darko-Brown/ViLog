import React from 'react';
import { Box, Flex, Spacer, Image, Text, Button } from '@chakra-ui/react';
import Logo from '../../assets/logo-1.png';

const Home = () => {
  return (
    <Box height='100vh' border='1px solid green'>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
        mt="2rem"
      >
        <Box p="4" display="flex" alignItems="center">
          <Image src={Logo} alt="logo" />
          <Text fontSize="2em" fontWeight="extrabold">
            ViLog
          </Text>
        </Box>
        <Spacer />
        <Box p="4">
          <Text textTransform="uppercase" fontSize="2em">
            Welcome...
          </Text>
        </Box>
        <Spacer />
        <Box p="4">
          <Button p="8" colorScheme="orange" size="lg">
            Click to start
          </Button>
        </Box>
      </Flex>
      <Box>
          <Image src='https://www.pngmart.com/files/10/Qr-Code-PNG-HD.png' alt='qrcode' maxW='10%' ml='2rem' mt='2rem'/>
      </Box>
    </Box>
  );
};

export default Home;
