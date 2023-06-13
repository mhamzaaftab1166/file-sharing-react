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
        data.append("name", file.name);
        data.append("file", file);
        uploadFile(data)
          .then((res) => res.data)
          .catch((err) => console.error(err.message));
      }
    })();
  }, [file]);

  return (
    <Box
      bg="black"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        width="90%"
        maxWidth="600px"
        height="400px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading as="h3" color="black">
          Share With Us
        </Heading>
        <Text color="black">Share your secure files with us!</Text>
        <Button bg="black" color="gray.500" onClick={() => onClickInput()}>
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
