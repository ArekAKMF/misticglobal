import React from "react";
import { GamesTypeContainer } from "@/components/gamesTypeContainer";
import { SimpleGrid, Heading, Container } from "@chakra-ui/react";
import { gamesType } from "@/utils/gameTypes";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/SectionTitle";

export default function GameTypesView({ locale }: any) {
  const t = useTranslations("Index");
  const gameList = gamesType[locale];
  return (
    <>
      <Container maxW="8xl">
        <SectionTitle title={t("cardTypeGame")} />
      </Container>
      <Container maxW="8xl">
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={10}>
          {gameList?.map((el: any, index: number) => {
            return (
              <GamesTypeContainer
                key={index}
                index={index}
                image="../../image.png"
                title={el.name}
                desc={el.descshort}
                url={"/" + locale + el.url}
                bg={el.background}
              />
            );
          })}
        </SimpleGrid>
      </Container>
    </>
  );
}
