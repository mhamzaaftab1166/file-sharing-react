import { Heading, Button, Input, Box, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { uploadFile } from "../services/api";

const FileComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const onClickInput = () => {
    inputRef.current?.click();
  };
  useEffect(() => {
    (() => {
      if (file) {
        const data = new FormData();
        data.append("file", file);
        uploadFile(data)
          .then((res) => res.data)
          .catch((err) => console.error(err.message));
      }
    })();
  }, [file]);

  return (
    <Box
      bg="white"
      height="100vh" // Set height to 100vh (100% of viewport height)
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
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
        <Heading as="h3" color="whitw">
          Share With Us
        </Heading>
        <Text marginTop={2} color="white">
          Share your secure files with us!
        </Text>
        <Button
          bg="#4299E1"
          color="white"
          _hover={{ bg: "#3182CE" }}
          _active={{ bg: "#2C5282" }}
          onClick={() => onClickInput()}
          marginTop={3}
        >
          Upload
        </Button>
        <Input
          display="none"
          ref={inputRef}
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        ></Input>
      </Box>
    </Box>
  );
};

export default FileComponent;
