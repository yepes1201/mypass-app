import React from "react";
import { BrowserRouter } from "react-router-dom";
import { firebaseConfig, initializeApp } from "firebase-config";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { AppRouter } from "routes";

initializeApp(firebaseConfig);

const theme = extendTheme({});

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ChakraProvider>
  );
};
