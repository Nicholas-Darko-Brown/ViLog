import React from 'react';
import {
  ChakraProvider,
  Box
} from '@chakra-ui/react';
import BootsrapCarousel from './components/Carousel.js/BootstrapCarousel';

const App = () => {
  return (
    <ChakraProvider>
      <Box>
        <BootsrapCarousel />
      </Box>
    </ChakraProvider>
  );
}

export default App;
