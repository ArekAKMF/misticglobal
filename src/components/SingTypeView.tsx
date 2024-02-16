import React, { useEffect, useState } from "react";
import { Checkerboard } from "@/components/checkerboard";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { horoscop } from "@/utils/gameTypes";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/SectionTitle";

const currentDate = () => {
  const cd = new Date();
  var day = cd.getDate();
  var month = cd.getMonth() + 1;
  var year = cd.getFullYear();

  const nMonth = month < 10 ? "0" + month : month;
  const nDay = day < 10 ? "0" + day : day;
  return nDay + "-" + nMonth + "-" + year;
};

export default function SingTypeView({ locale }: any) {
  const t = useTranslations("Index");
  const [activeDate, setActiveDate] = useState("");
  const gameList = horoscop[locale];

  useEffect(() => {
    if (activeDate === "") {
      setActiveDate(currentDate());
    }
  }, [activeDate]);
  return (
    <Container maxW="8xl">
      <SectionTitle title={t("cardTypeSing")} />
      <SimpleGrid autoColumns="true" columns={[1, 2, 3]}>
        {gameList?.map((el: any, index: number) => {
          return (
            <Checkerboard
              key={index}
              image={el?.image ? el.image : "../../logo-biale.png"}
              title={el.name}
              url={`/${locale}/${el.url.toLowerCase()}-${activeDate}`}
            />
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
