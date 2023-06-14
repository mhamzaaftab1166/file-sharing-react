import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const OutBox = ({ children }: Props) => {
  return (
    <Box
      bg="white"
      height="100vh" // Set height to 100vh (100% of viewport height)
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};

export default OutBox;
