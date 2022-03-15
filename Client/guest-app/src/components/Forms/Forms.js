import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Text,
  Box,
} from '@chakra-ui/react';

const Forms = () => {
  return (
    <Box display="flex" justifyContent='center'>
      <FormControl
        isRequired
        w="30%"
        // border="2px solid orange.100"
        p={5}
        m={5}
        display="flex"
        flexDirection="column"
        borderRadius="1rem"
        boxShadow="2xl"
        bg="orange.120"
      >
        <Text
          fontSize="1.2em"
          fontWeight="extrabold"
          textTransform="uppercase"
          letterSpacing="2px"
          textAlign="center"
          mb={3}
        >
          Tell us about yourself
        </Text>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input type="text" id="name" placeholder="First name" />
        <FormLabel htmlFor="company" mt={3}>
          Company
        </FormLabel>
        <Input type="text" id="company" placeholder="Company" />
        <FormLabel htmlFor="tel" mt={3}>
          Phone
        </FormLabel>
        <Input type="tel" id="tel" placeholder="Phone" />
        <FormLabel htmlFor="email" mt={3}>
          Email
        </FormLabel>
        <Input type="email" id="email" placeholder="Email" />
        <Select isRequired placeholder="Select an option" mt={7} >
          <option value="option1">I am a Visitor</option>
          <option value="option2">I am a Contractor</option>
        </Select>
        <Button colorScheme="orange" variant="solid" mt={9}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default Forms;
