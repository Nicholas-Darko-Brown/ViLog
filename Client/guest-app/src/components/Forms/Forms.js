import React from 'react';
import {
  FormControl,
  Input,
  Select,
  Button,
  Text,
  Box,
} from '@chakra-ui/react';

const Forms = () => {
  return (
    <Box display="flex" justifyContent='center' height='100%'>
      <FormControl
        isRequired
        w="30%"
        // border="2px solid orange.100"
        p={5}
        m={5}
        display="flex"
        flexDirection="column"
        justifyContent='center'
        borderRadius="1rem"
        boxShadow="2xl"
        bg="orange.120"
        // maxHeight='100%'
      >
      {/* <Box display="flex" justifyContent='center'>
      <Image src={User} alt="done" border="1px solid red" w="5rem" textAlign='center' />
      </Box> */}
        <Text
          fontSize="1.2em"
          fontWeight="extrabold"
          textTransform="uppercase"
          letterSpacing="2px"
          textAlign="center"
          mb={10}
        >
          Tell us about yourself
        </Text>
        {/* <FormLabel htmlFor="name">Name</FormLabel> */}
        <Input type="text" id="name" placeholder="Name" />
        {/* <FormLabel htmlFor="company" mt={3}>
          Company
        </FormLabel> */}
        <Input type="text" id="company" mt={5} placeholder="Company" />
        {/* <FormLabel htmlFor="tel" mt={3}>
          Phone
        </FormLabel> */}
        <Input type="tel" id="tel" mt={5} placeholder="Phone" />
        {/* <FormLabel htmlFor="email" mt={3}>
          Email
        </FormLabel> */}
        <Input type="email" id="email" mt={5} placeholder="Email" />
        <Select isRequired placeholder="Select your position" mt={5} >
          <option value="option1">Visitor</option>
          <option value="option2">Contractor</option>
        </Select>
        <Select isRequired placeholder="Who are you visiting?" mt={5} >
          <option value="option1">Kofi Kankam</option>
          <option value="option2">Yvonne Smith</option>
        </Select>
        <Button colorScheme="orange" variant="solid" mt={9}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default Forms;
