import React, { useState } from 'react';
import {
  Box,
  Flex,
  Spacer,
  Image,
  Text,
  Button,
  Center,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import Logo from '../../assets/logo-1.png';
import { MdDashboard } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import FastLogin from '../FastLogin/FastLogin';
import axios from 'axios';

// Homepage
const Home = () => {
  let navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [data, setData] = useState({
    Id: '',
    name: '',
    company: '',
    tel: '',
    email: '',
    position: '',
    status: ''
  });

  const timestamp = new Date(Date.now()).toISOString();
  console.log(timestamp)

  const url = "/adminPage/visitorsLog"

  const handleSubmit = (e) => {

    console.log("here")
    e.preventDefault()

    const newData = Object.assign({Id: data.Id}, {timestamp: timestamp}, {status: 'checked out'})
    // setData(newData)
    console.log(newData)

    axios.put(url, newData);
  }

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

          {/* Parent container */}
          <Box display="flex" gap="1rem" >
            <Button
              rightIcon={<MdDashboard />}
              colorScheme="gray"
              variant="outline"
              fontWeight="bold"
              onClick={() => {
                navigate('/dashboard');
              }}
            >
              Dashboard
            </Button>

            {/* Logout Button */}
            <Button
              onClick={onOpen}
              rightIcon={<FiLogOut />}
              colorScheme="orange"
            >
              Logout
            </Button>
            {/* Logout popup */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Are you sure?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>
                    When the modal opens, focus is sent into the modal and set
                    to the first tabbable element. If there are no tabbled
                    elements, focus is set on ModalContent.
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button onClick={handleSubmit} onClose={onClose} variant="ghost">Confirm</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Box>

        <Spacer />
        <Center h="300px">
          <Heading size="4xl">Welcome...</Heading>
        </Center>

        
      </Flex>
      <FastLogin />
    </Box>
  );
};

export default Home;
