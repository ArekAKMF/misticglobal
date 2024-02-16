import React from "react";
import {
  Container,
  Flex,
  Text,
  Heading,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";

export default function Banner() {
  return (
    <Container background="#0F111D" w="100%" maxW="12xl">
      <Container maxW="8xl">
        <Flex
          h="auto"
          backgroundImage="../../karty-stol.jpg"
          backgroundRepeat="no-repeat"
          backgroundPosition="left center"
          minH="500px"
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            w="100%"
          >
            <Link href="/" padding="20px">
              <Container maxW="6xl">
                <Heading
                  as="h4"
                  variant="pageTitle"
                  marginTop="0"
                  textAlign="center"
                  fontWeight="800"
                  color="#fff"
                >
                  Odkryj Świat Tarota
                </Heading>
                <Heading
                  as="h4"
                  variant="pageTitle"
                  margin="0 20px"
                  textAlign="center"
                  fontWeight="800"
                  color="#fff"
                >
                  Zdobądź Wgląd w Twoją Przyszłość!
                </Heading>
              </Container>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
}
