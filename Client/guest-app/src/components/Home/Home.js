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

const Home = () => {
  let navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Box display="flex" gap="1rem">
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
            {/* <Button
              rightIcon={<FiLogOut />}
              colorScheme="orange"
              variant="solid"
              fontWeight="bold"
              onClick={() => {
                navigate("/logout")
              }}
            >
              Logout
            </Button> */}
            <>
              <Button onClick={onOpen} rightIcon={<FiLogOut />} colorScheme="orange">Logout</Button>

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
                    <Button variant="ghost">Confirm</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
          </Box>
        </Box>
        <Spacer />
        <Center h="300px">
          <Heading size="4xl">Welcome...</Heading>
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
