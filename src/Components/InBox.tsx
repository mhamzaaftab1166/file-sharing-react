import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const InBox = ({ children }: Props) => {
  return (
    <Box
      bg="#2b47fc"
      width="90%"
      maxWidth="600px"
      height="400px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      borderRadius={10}
    >
      {children}
    </Box>
  );
};

export default InBox;
