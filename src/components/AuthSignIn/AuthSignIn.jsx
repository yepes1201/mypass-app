import { BsGoogle } from "react-icons/bs";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Icon,
  Divider,
} from "@chakra-ui/react";

export const AuthSignIn = () => {
  return (
    <div className="auth__inputs-container">
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input name="email" type="email" placeholder="example@mail.com" />
        <FormHelperText>Please type your email account</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input name="password" type="password" />
      </FormControl>
      <Divider />
      <Button
        leftIcon={<ArrowForwardIcon />}
        variant="solid"
        colorScheme="teal"
      >
        Sign In
      </Button>
      <Button
        leftIcon={<Icon as={BsGoogle} />}
        variant="solid"
        colorScheme="blue"
      >
        Google
      </Button>
    </div>
  );
};
