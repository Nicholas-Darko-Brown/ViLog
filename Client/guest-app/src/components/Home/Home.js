import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Image,
  Text,
  Button,
  Center,
  Heading,
} from '@chakra-ui/react';
import Logo from '../../assets/logo-1.png';
import { MdDashboard } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';



// Homepage
const Home = () => {
  const navigate = useNavigate();

  return (
    <Box height="100vh">
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
            <Text fontSize="2em" fontWeight="extrabold">
              ViLog
            </Text>
          </Box>

          <Box display="flex" gap="1rem" >
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

        <Spacer />
        <Center h="300px">
          <Heading size="4xl" mt={20}>Welcome...</Heading>
        </Center>
      </Flex>
    </Box>
  );
};

export default Home;
