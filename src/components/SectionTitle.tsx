import React from "react";
import { Box, Divider, Heading, Text, Flex, Image } from "@chakra-ui/react";

export default function SectionTitle({ title }: any) {
  return (
    <Box textAlign="center" overflow="hidden">
    <Heading
      as="h2"
      variant="sectionTitlePage"
    >
      {title}
    </Heading>
    </Box>
  );
}
