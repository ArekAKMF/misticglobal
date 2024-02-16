"use client";
import React from "react";
import { Flex, FormLabel, Select, FormControl, Box } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function LanguageBox({ locale }: any) {
  const t = useTranslations("Index");
  const changeLanguage = (lang: string) => {
    window.location.replace("/" + lang);
  };

  return (
    <Box position="absolute" right="10px" top="-4px">
      <Flex flexDirection="column" justifyContent="center">
        <FormControl as="fieldset">
          <FormLabel display="none" htmlFor="language">
            {t("pageLanguage")}
          </FormLabel>
          <Select
            placeholder=""
            value={locale}
            onChange={(e) => changeLanguage(e.target.value)}
            id="language"
            h="28px"
            marginTop="5px"
            background="#fff"
            border="1px solid #aaa"
            w="80px"
          >
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="pl">PL</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
            <option value="nl">NL</option>
            <option value="it">IT</option>
          </Select>
        </FormControl>
      </Flex>
    </Box>
  );
}
