import { InMemoryDbService } from "angular-in-memory-web-api";
import { Injectable } from "@angular/core";
import { Scion } from "./scion";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const scions = [
      {
        id: 1,
        name: "louissoix",
        lastname: "leveilleur",
        race: "elezen",
        job: "mage blanc",
        img:
          "https://vignette.wikia.nocookie.net/finalfantasy/images/e/e9/Louisoix_NPC_Render.png/revision/latest/scale-to-width-down/283?cb=20190716213659"
      },
      {
        id: 2,
        name: "alphinaud",
        lastname: "leveilleur",
        race: "elezen",
        job: "invocateur",
        img:
          "https://vignette.wikia.nocookie.net/finalfantasy/images/0/08/FFXIV_SH_Alphinaud_2.png/revision/latest/scale-to-width-down/174?cb=20190616200309"
      },
      {
        id: 3,
        name: "alisaie",
        lastname: "leveilleur",
        race: "elezen",
        job: "mage rouge",
        img:
          "https://vignette.wikia.nocookie.net/finalfantasy/images/6/69/FFXIV_SH_Alisaie_2.png/revision/latest/scale-to-width-down/281?cb=20190616200310"
      },
      {
        id: 4,
        name: "minfilia",
        lastname: "warde",
        race: "hyur",
        job: "oracle",
        img:
          "https://vignette.wikia.nocookie.net/finalfantasy/images/9/99/Minfilia_NPC_Render.png/revision/latest/scale-to-width-down/286?cb=20190716212314"
      },
      {
        id: 5,
        name: "tataru",
        lastname: "taru",
        race: "lalafell",
        job: "arcaniste",
        img:
          "https://vignette.wikia.nocookie.net/finalfantasy/images/2/2f/FFXIV_ARR_Tataru.png/revision/latest/scale-to-width-down/281?cb=20190719142221"
      },
      {
        id: 6,
        name: "thancred",
        lastname: "waters",
        race: "hyur",
        job: "surineur / pistosabreur",
        img:
          "https://vignette.wikia.nocookie.net/finalfantasy/images/4/46/FFXIV_SH_Thancred_2.png/revision/latest/scale-to-width-down/350?cb=201906162"
      },
      {
        id: 7,
        name: "y'shtola",
        lastname: "rhul",
        race: "miqo'te",
        job: "mage blanc / mage noir",
        img:
          "https://vignette.wikia.nocookie.net/finalfantasy/images/7/72/FFXIV_SH_Y%27shtola_2.png/revision/latest/scale-to-width-down/350?cb=2019061620030800307"
      },
      {
        id: 8,
        name: "yda",
        lastname: "hext",
        race: "hyur",
        job: "moine",
        img:
          "https://vignette.wikia.nocookie.net/finalfantasy/images/8/86/Yda_NPC_Render_2.png/revision/latest/scale-to-width-down/204?cb=20190716213422"
      },
      {
        id: 9,
        name: "papalymo",
        lastname: "Totolymo",
        race: "lalafell",
        job: "mage blanc",
        img:
          "https://vignette.wikia.nocookie.net/finalfantasy/images/0/08/Papalymo_NPC_Render_2.png/revision/latest/scale-to-width-down/317?cb=20190716213107"
      },
      {
        id: 10,
        name: "urianger",
        lastname: "augurelt",
        race: "elezen",
        job: "invocateur / astromancien",
        img:
          "https://vignette.wikia.nocookie.net/finalfantasy/images/e/eb/Urianger_Augurelt_FFXIV_5.0.png/revision/latest/scale-to-width-down/245?cb=20190621093442"
      },
      {
        id: 11,
        name: "Moenbryda",
        lastname: "Wilfsunnwyn",
        race: "Roegadyn",
        job: "guerrier",
        img:
          "https://vignette.wikia.nocookie.net/finalfantasy/images/5/5b/FFXIV_Moenbryda.png/revision/latest/scale-to-width-down/281?cb=20190719141457"
      }
    ];
    return { scions };
  }

  // Surpasser le genId pour être sûr que chaque scion a un id, si le tableau est vide, le premier id crée sera 11, sinon ce sera l'id le plus élevé +1

  genId(scions: Scion[]): number {
    return scions.length > 0
      ? Math.max(...scions.map(scion => scion.id)) + 1
      : 11;
  }
}
