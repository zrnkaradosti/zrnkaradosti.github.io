/* =====================================================================
   VŠETKY VYSTÚPENIA SÚ TU.  Nový článok = skopíruj jeden blok { ... },
   vlož ho do zoznamu (poradie je jedno, stránka ich zoradí podľa dátumu)
   a zmeň hodnoty.

   id       krátky názov do adresy: malé písmená, bez diakritiky, bez medzier
            (napr. "dozinky-2027"). Musí byť v každom vystúpení iný.
   nazov    nadpis vystúpenia
   miesto   kde sa vystupovalo
   datum    RRRR-MM-DD (napr. "2027-06-05")
   popis    jedna krátka veta, zobrazí sa v zozname vystúpení
   text     odseky článku; každý odsek je jeden text v úvodzovkách,
            oddelený čiarkou
   fotky    priecinok: kde ležia fotky, pocet: koľko ich je.
            Fotky musia byť pomenované 1.jpg, 2.jpg, 3.jpg ... a ležať
            v tom priečinku. Prvá fotka (1.jpg) je zároveň titulná.
            Ak fotky nemáš, daj pocet: 0.
   ===================================================================== */
const VYSTUPENIA = [
  {
    id: "dni-zela",
    nazov: "Dni zelá",
    miesto: "Dni zelá",
    datum: "2026-10-18",
    popis: "Spievali sme medzi stánkami plnými kapusty a tešili sa z prvého spoločného vystúpenia tejto jesene.",
    text: [
      "Na Dňoch zelá sme sa predstavili s programom ľudových piesní a tancov. Pódium sme mali priamo uprostred jarmoku, takže nás počuli aj tí, ktorí sa pôvodne zastavili len pri stánku s kyslou kapustou.",
      "Zaspievali sme pesničky o jeseni, zbere a práci na poli a nechýbali ani tance, do ktorých sme postupne zapojili aj divákov. Najväčší ohlas mali najmenší členovia skupiny, ktorí sa na pódiu cítili ako doma.",
      "Ďakujeme organizátorom za pozvanie a všetkým, ktorí s nami spievali. Fotky z vystúpenia nájdete nižšie.",
      "(Toto je ukážkový text. Prepíš ho vlastným v súbore vystupenia.js.)"
    ],
    fotky: { priecinok: "img/dni-zela", pocet: 6 }
  },
  {
    id: "domov-dochodcov-heydukova",
    nazov: "Domov dôchodcov Heydukova",
    miesto: "Bratislava, Heydukova",
    datum: "2026-10-10",
    popis: "Popoludnie plné spevu pre obyvateľov domova dôchodcov.",
    text: [
      "Ukážkový text o vystúpení v domove dôchodcov. Prepíš ho vlastným v súbore vystupenia.js."
    ],
    fotky: { priecinok: "img/heydukova", pocet: 3 }
  },
  {
    id: "laskava-stupava",
    nazov: "Láskavá Stupava",
    miesto: "Stupava",
    datum: "2026-09-27",
    popis: "Vystúpenie na komunitnom podujatí v Stupave.",
    text: [
      "Ukážkový text o vystúpení na podujatí Láskavá Stupava. Prepíš ho vlastným v súbore vystupenia.js."
    ],
    fotky: { priecinok: "img/stupava", pocet: 3 }
  },
  {
    id: "domov-dochodcov-dubravka",
    nazov: "Domov dôchodcov Dúbravka",
    miesto: "Bratislava, Dúbravka",
    datum: "2026-10-16",
    popis: "Vystúpenie pre dôchodcov v domove dôchodcov v Dúbravke.",
    text: [
      "Ukážkový text o vystúpení na podujatí Láskavá Stupava. Prepíš ho vlastným v súbore vystupenia.js."
    ],
    fotky: { priecinok: "img/dubravka", pocet: 3 }
  },
    {
    id: "kostol-stupava",
    nazov: "Kostol Stupava",
    miesto: "Stupava",
    datum: "2026-10-16",
    popis: "Vystúpenie v kostole v Stupave.",
    text: [
      "Ukážkový text o vystúpení v kostole v Stupave. Prepíš ho vlastným v súbore vystupenia.js."
    ],
    fotky: { priecinok: "img/kostol-stupava", pocet: 3 }
  }
];
