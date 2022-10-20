import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { AuthSignIn } from "@components/AuthSignIn/AuthSignIn";
import { AuthSignUp } from "@components/AuthSignUp/AuthSignUp";

export const AuthForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Tabs>
        <TabList>
          <Tab>Sign In</Tab>
          <Tab>Sign Up</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AuthSignIn />
          </TabPanel>
          <TabPanel>
            <AuthSignUp />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </form>
  );
};
