import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Center,
  Heading,
} from '@chakra-ui/react';
import Logo from '../../assets/amalitech-logo-1.svg';
import { MdDashboard } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './Home.css'



// Homepage
const Home = () => {
  const navigate = useNavigate();

  return (
    <Box height="100vh" className='home_container'>
      <Flex flexDirection="column" alignItems="center" gap="1.2rem">
        <Box
          p="0 1rem"
          w="70%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" alignItems="center" >
            <Image src={Logo} alt="logo" />
            <Text fontSize="2em" fontWeight="extrabold" color="#e25d2c">
              ViLog
            </Text>
          </Box>

          <Box>
            <Button
              rightIcon={<MdDashboard />}
              colorScheme="orange"
              variant="solid"
              fontWeight="bold"
              onClick={() => {
                navigate('/dashboard');
              }}
            >
              Dashboard
            </Button>
          </Box>
        </Box>

        <Center color="#ffffff" height="70vh" display="flex" flexDirection="column" >
          <Heading size="4xl" >Welcome...</Heading>
          <Text fontSize="3xl" pt={5} letterSpacing='2px' >Please, sign in on the next slide</Text>
        </Center>
      </Flex>
    </Box>
  );
};

export default Home;
