import { Grid, GridItem } from "@chakra-ui/react";

import { useRef } from "react";
import SideImage from "./Components/SideImage";
import FileComponent from "./Components/FileComponent";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"aside" "main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "383px 1fr",
      }}
      height="100vh"
    >
      <GridItem area="aside">
        <SideImage></SideImage>
      </GridItem>
      <GridItem area="main">
        <FileComponent></FileComponent>
      </GridItem>
    </Grid>
  );
};

export default App;
