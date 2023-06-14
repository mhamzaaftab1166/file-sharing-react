import {
  Heading,
  Button,
  Input,
  Text,
  Link,
  useClipboard,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { uploadFile } from "../services/api";
import OutBox from "./OutBox";
import InBox from "./InBox";

const FileComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState("");

  const onClickInput = () => {
    inputRef.current?.click();
  };

  const { hasCopied, onCopy } = useClipboard(response);

  useEffect(() => {
    (() => {
      if (file) {
        const data = new FormData();
        data.append("file", file);
        uploadFile(data)
          .then((res) => setResponse(res.data.path))
          .catch((err) => console.error(err.message));
      }
    })();
  }, [file]);

  return (
    <OutBox>
      <InBox>
        <Heading as="h3" color="white">
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
        {response && (
          <Flex flexDirection="column" alignItems="center">
            <Link
              color="white"
              href={response}
              textAlign="center"
              marginTop={4}
            >
              Click here to download file or copy below link for remote access!
            </Link>
            <Flex justifyContent="flex-end" width="100%" marginTop={2}>
              <Link color="white" href={response} textAlign="center">
                {response}
              </Link>
              <Button
                variant="outline"
                colorScheme="white"
                size="xs"
                onClick={onCopy}
                marginLeft={2}
              >
                {hasCopied ? "Copied!" : "Copy Link"}
              </Button>
            </Flex>
          </Flex>
        )}
        <Input
          display="none"
          ref={inputRef}
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
      </InBox>
    </OutBox>
  );
};

export default FileComponent;
