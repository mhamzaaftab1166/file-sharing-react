import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import aside from "../src/assets/aside.jpg";
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"aside"  "main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "383px 1fr",
      }}
    >
      <GridItem area="aside">
        <Box display="flex">
          <Image src={aside} bg="black" height="100vh" />
        </Box>
      </GridItem>
      <GridItem area="main">
        <Box
          bg="black"
          height="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            bg="white"
            width="600px"
            height="400px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Heading as="h3" color="black">
              Share With Us
            </Heading>
            <Text color="black">Share your secure files with us!</Text>
            <Button colorScheme="red">Upload</Button>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default App;
