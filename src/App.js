// import { useBoolean } from "@chakra-ui/react";
// import { Logo } from "./components/Logo";
// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  ChakraProvider,
  Box,
  // Text,
  // Code,
  // Center,
  Link,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import { Header } from "./components/index";

// eslint-disable-next-line no-unused-vars

import "./styles/global.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header />

        <Grid minH="100vh" p={3}>
          {/* <Header theme={<ColorModeSwitcher justifySelf="flex-end" />} /> */}
          <ColorModeSwitcher justifySelf="flex-middle" />
          <VStack spacing={10}>
            <Link
              color="teal.500"
              href="https://linktr.ee/oluanuakin"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
              >
              øLu Tobi Akinyemi <br />
              (click)
            </Link>
            
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );

}

export default App;
