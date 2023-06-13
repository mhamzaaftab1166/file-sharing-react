import { Box, Image } from "@chakra-ui/react";
import aside from "../assets/aside.jpg";

const SideImage = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Image src={aside} bg="black" height="100%" objectFit="cover" />
    </Box>
  );
};

export default SideImage;
