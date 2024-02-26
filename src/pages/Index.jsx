import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, VStack, useToast } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus, FaCommentsDollar } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // This is a placeholder function for sign-in logic
  const handleSignIn = (e) => {
    e.preventDefault();
    // Here you would add logic to authenticate the user
    toast({
      title: "Sign In",
      description: "Sign in functionality is not implemented in this demo.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Heading as="h1" size="xl">
          Business & Investor Connect
        </Heading>
        <Button colorScheme="blue" leftIcon={<FaUserPlus />}>
          Sign Up
        </Button>
      </Flex>

      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            Sign In
          </Heading>
          <form onSubmit={handleSignIn}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Button type="submit" colorScheme="teal" leftIcon={<FaSignInAlt />} mt={4}>
                Sign In
              </Button>
            </Stack>
          </form>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Flex alignItems="center" justifyContent="space-between">
            <Heading as="h3" size="md">
              Looking to connect with business owners or investors?
            </Heading>
            <Button colorScheme="green" leftIcon={<FaCommentsDollar />}>
              Start a Conversation
            </Button>
          </Flex>
          <Text mt={4}>Join our marketplace to find eligible partners for your business or investment goals. Verify your credentials and start chatting directly on our platform.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
