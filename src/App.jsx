import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "@routes/AppRouter";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AppRouter />
      </ChakraProvider>
    </BrowserRouter>
  );
};

export { App };
