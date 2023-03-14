import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { useBoolean } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { Logo } from './components/Logo';
import {Header, Navigation} from "./components";



function App() {
  return (


    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          {/* <Header></Header> */}
          
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text useBoolean>
              
            </Text>
            <Link
              color="teal.500"
              href="https://linktr.ee/oluanuakin"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
              >
              øLu 
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
              
  );
}

export default App;
