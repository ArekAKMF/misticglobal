// useFirebaseHook.js
"use client";
import { useState, useEffect } from "react";
import db from "@/firebase/config";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
  getDoc,
  onSnapshot,
  query,
  where,
  or,
  and,
  addDoc,
} from "firebase/firestore";
import { useData } from "@/hooks/useData";
import { useTranslation } from "react-i18next";

const useFirebaseHook = (local: any) => {
  const cardList = useData();
  const { t, i18n } = useTranslation();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sendDataToFirebase = async (data: any) => {
    try {
      const directory = `${data.sing}-${data.data}`;
      await setDoc(doc(db, "karty", directory), data);
    } catch (error) {
      console.error("Błąd podczas przekazywania danych do Firebase:", error);
    }
  };

  const getDataFromFirebase = async (data: any) => {
    const q = query(
      collection(db, "karty"),
      and(
        where("sing", "==", data.section),
        where("data", "==", data.currentDate)
      )
    );

    try {
      const querySnapshot2 = await getDocs(q);

      if (querySnapshot2.empty) {
        const cardCount = cardList.allCards[local].cards.length + 1;
        const cardRandom = Math.floor(Math.random() * cardCount);
        const newCard = cardList.allCards[local].cards[cardRandom];
        setData(newCard);
        sendDataToFirebase({
          data: data.currentDate,
          sing: data.section,
          karta: newCard.name,
        });
      } else {
        querySnapshot2.forEach((doc) => {
          const id = doc.data().karta;
          if (id) {
            const selected = cardList?.allCards[local]?.cards?.find(
              (el: any) => el.name === id
            );
            selected && setData(selected);
          }
        });
      }
    } catch (error) {
      console.error("Błąd podczas przekazywania danych do Firebase:", error);
      //   setError();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading, error, getDataFromFirebase };
};

export default useFirebaseHook;
