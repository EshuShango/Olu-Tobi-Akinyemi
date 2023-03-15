// import { useBoolean } from "@chakra-ui/react";
// import { Logo } from "./components/Logo";
// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import { useState } from "react"
// 1. Import
import { Icon } from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md'
import { PhoneIcon, AddIcon,ViewIcon, WarningIcon } from '@chakra-ui/icons'

import {
  ChakraProvider,
  Box,
  // Text,
  // Code,
  // Center,
  Image,
  WrapItem,
  Tooltip,
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
        <Header style={{margin:"20px"}}
        // usState={{ColorModeSwitcher, justifySelf:"flex-end"}}
        />

        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />

          <VStack spacing={10}>
            <Link
              color="teal.500"
              href="https://linktr.ee/oluanuakin"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WrapItem>

              <Tooltip label="Click the link and get to know me a bit more"
              placement='bottom' defaultIsOpen
               aria-label="A tooltip">
               💛🦾🌱 
              </Tooltip>
              </WrapItem>
                {/* <ViewIcon w={3} h={3} color="teal.500" /> */}
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
