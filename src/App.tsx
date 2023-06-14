import { Grid, GridItem } from "@chakra-ui/react";
import { useRef } from "react";
import SideImage from "./Components/SideImage";
import FileComponent from "./Components/FileComponent";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "100%",
        lg: "383px 1fr",
      }}
      height="100vh"
    >
      <GridItem area="aside">
        <SideImage />
      </GridItem>
      <GridItem area="main">
        <FileComponent />
      </GridItem>
    </Grid>
  );
};

export default App;
