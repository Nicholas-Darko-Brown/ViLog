import React from 'react';
import { FormControl, Input, Text, Box } from '@chakra-ui/react';

const Host = () => {
  return (
    <Box display="flex" justifyContent="center" height='100vh' border="1px solid red">
      <FormControl w="30%" border="1px solid green" mt={10} padding='1rem'>
        <Text textTransform="uppercase" fontSize="1.2em" fontWeight="extrabold" textAlign='center' letterSpacing='1.5px'>
          Who are you visiting?
        </Text>
        <Input
          type="search"
          id="search"
          placeholder="Search for host/employee"
          mt={5}
        />
      </FormControl>
    </Box>
  );
};

export default Host;
