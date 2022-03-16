import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Image,
  Text,
  Button,
  Center,
  Heading
} from '@chakra-ui/react';
import Logo from '../../assets/logo-1.png';
import { MdDashboard } from 'react-icons/md';

const Home = () => {
  return (
    <Box height="100vh">
      <Flex
        flexDirection="column"
        // justifyContent="center"
        alignItems="center"
        gap="2rem"
        // mt="2rem"
      >
        <Box
          p="0 1rem"
          w="70%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" alignItems="center">
            <Image src={Logo} alt="logo" />
            <Text fontSize="2em" fontWeight="extrabold">
              ViLog
            </Text>
          </Box>
          <Box>
            <Button
              rightIcon={<MdDashboard />}
              colorScheme="orange"
              variant="outline"
              fontWeight="bold"
            >
              Dashboard
            </Button>
          </Box>
        </Box>
        <Spacer />
        <Center h="300px">
        <Heading size='4xl'>Welcome...</Heading>
        </Center>
        {/* <Box p="4">
          <Button p="8" colorScheme="orange" size="lg">
            Click to start
          </Button>
        </Box> */}
      </Flex>
      {/* <Box>
          <Image src='https://www.pngmart.com/files/10/Qr-Code-PNG-HD.png' alt='qrcode' maxW='10%' />
      </Box> */}
    </Box>
  );
};

export default Home;
