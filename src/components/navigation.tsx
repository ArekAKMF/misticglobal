"use client";
import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  useColorModeValue,
  Link,
  Container,
  ListItem,
  List,
} from "@chakra-ui/react";
import LanguageBox from "@/components/LanguageBox";
import { useTranslations } from "next-intl";
import navigationList from "@/const/NavigationList";

export const WithSubnavigation = ({ locale }: any) => {
  const t = useTranslations("Index");
  const navList = navigationList[locale];

  return (
    <Box>
      <Container maxW="8xl">
        <Flex
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
          justifyContent="center"
          alignItems="center"
        >
          <Link
            variant="empty"
            href="/"
            textDecoration="none!important"
            padding="0"
            title={t("pageName")}
          >
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src="../../logo-biale.png"
                width="80px"
                padding="0 5px"
                alt="Logo"
                objectFit="cover"
              />
              <Text
                align="center"
                justifyContent="center"
                alignItems="center"
                fontSize="20px"
                fontWeight="bold"
                paddingTop="5px"
              >
                {t("pageName")}
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Container>
      <Container
        maxW="100%"
        borderBottom="1px solid #aaa"
        borderTop="1px solid #aaa"
        backgroundColor="#eee"
        padding="5px 0"
        position="relative"
      >
        <Flex
          align={"center"}
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <List display="flex" flexDirection="row">
            {navList.map((nav: any) => (
              <ListItem key={nav.name}>
                <Link href={"/" + locale + "/" + nav.url} variant="linkMenu">
                  {nav.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </Flex>
        <LanguageBox locale={locale} />
      </Container>
    </Box>
  );
};
