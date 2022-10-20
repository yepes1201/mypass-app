import { NavLink } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Input,
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Divider,
  Link,
} from "@chakra-ui/react";

export const AuthSignUp = () => {
  return (
    <div className="auth__inputs-container">
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input name="name" type="text" placeholder="John Doe" />
        <FormHelperText>Please type your name</FormHelperText>
      </FormControl>
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
        Sign Up
      </Button>
    </div>
  );
};
