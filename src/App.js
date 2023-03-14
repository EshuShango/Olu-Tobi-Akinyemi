// import { useBoolean } from "@chakra-ui/react";
// import { Logo } from "./components/Logo";
// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import { Header } from "./components/index";
import "./styles/global.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
        <Header />
          <VStack spacing={8}>
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
