import React from 'react';
import {
  ChakraProvider,
  Box
} from '@chakra-ui/react';
import Home from './components/Home/Home';
import Forms from './components/Forms/Forms'
import Host from './components/Host/Host'
import SignedIn from './components/SignedIn/SignedIn'

function App() {
  return (
    <ChakraProvider>
      <Box fontSize="xl">
        <Home />
      </Box>
      <Box>
        <Forms />
      </Box>
      <Box>
        <Host />
      </Box>
      <Box>
        <SignedIn />
      </Box>
    </ChakraProvider>
  );
}

export default App;
