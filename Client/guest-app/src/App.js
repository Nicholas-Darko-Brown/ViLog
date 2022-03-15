import React from 'react';
import {
  ChakraProvider,
  Box
} from '@chakra-ui/react';
import Home from './components/Home/Home';
import Forms from './components/Forms/Forms'

function App() {
  return (
    <ChakraProvider>
      <Box fontSize="xl">
        <Home />
      </Box>
      <Box>
        <Forms />
      </Box>
    </ChakraProvider>
  );
}

export default App;
