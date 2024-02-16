"use client";
import { useMemo } from "react";

import { gamesType, horoscop } from "@/utils/gameTypes";
const staticUrl = [
  "wrozba",
  "wahrsagung",
  "divination",
  "divinazione",
  "adivinación",
  "waarzeggerij",
  "divination",
];

export const useGameType = (params: any) => {
  const gamesTypeList = gamesType[params?.locale];
  const horoscopList = horoscop[params?.locale];
  const router = params.slug[0];

  let selectedGame: any;
  let gameId: any;
  let horoscope: any;
  let layoutCard: any;
  let currentDate: any;

  if (router) {
    if (router) {
      const gt =
        router.split("/")[router?.split("/").length - 1];
      selectedGame = gamesTypeList?.find((el: any) => {
        if (el.url.includes(gt)) {
          gameId = el?.type;
          layoutCard = 1;
          return el;
        }
      });

      if (!selectedGame) {
        if (staticUrl.includes(gt)) {
          layoutCard = 3;
        } else {
          let selected = gt;
          if (gt.includes("-")) {
            const day = gt.split("-")[1];
            selected = gt.split("-")[0];
            currentDate = day + "-" + gt.split("-")[2] + "-" + gt.split("-")[3];
          }
          horoscope = horoscopList?.find((el: any) => {
            if (el.url.toLocaleLowerCase() === selected) {
              layoutCard = 2;
              return el;
            }
          });
        }
      }
    }
  }

  return useMemo(() => {
    return {
      selectedGame,
      horoscope,
      layoutCard,
      currentDate,
      sg: gamesTypeList?.filter((item: any) => {
        if (gameId !== "") {
          if (item.type == gameId) {
            return item;
          }
        }
      }),
    };
  }, [gameId, horoscope, layoutCard, selectedGame, currentDate, gamesTypeList]);
};
