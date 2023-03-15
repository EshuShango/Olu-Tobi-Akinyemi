// import { useBoolean } from "@chakra-ui/react";
// import { Logo } from "./components/Logo";
// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  ChakraProvider,
  Box,
  // Text,
  // Code,
  Link,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import { Header, abtMe } from "./components/index";
import "./styles/global.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header />
            <abtMe // eslint-disable-next-line
            />
        <Grid minH="100vh" p={3}>
        {/* <Header theme={<ColorModeSwitcher justifySelf="flex-end" />} /> */}
          <ColorModeSwitcher justifySelf="flex-end" />
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
