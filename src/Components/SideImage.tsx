import { Box, Image } from "@chakra-ui/react";
import aside from "../assets/aside2.jpg";

const SideImage = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={{ base: "50vh", lg: "100%" }}
    >
      <Image
        src={aside}
        bg="black"
        height="100%"
        width={{ base: "100%", lg: "auto" }}
        objectFit="cover"
      />
    </Box>
  );
};

export default SideImage;
