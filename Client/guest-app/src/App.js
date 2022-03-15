import React from 'react';
import {
  ChakraProvider,
  Box
} from '@chakra-ui/react';
import Home from './components/Home/Home';

function App() {
  return (
    <ChakraProvider>
      <Box fontSize="xl">
        <Home />
      </Box>
    </ChakraProvider>
  );
}

export default App;
