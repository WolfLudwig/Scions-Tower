import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Scion } from './scion';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const scions = [
      {id: 1, name: "louissoix", lastname: "leveilleur", race: "elezen", job: "mage blanc"},
      {id: 2, name: "alphinaud", lastname: "leveilleur", race: "elezen", job: "invocateur"},
      {id: 3, name: "alisaie", lastname: "leveilleur", race: "elezen", job: "mage rouge"},
      {id: 4, name: "minfilia", lastname: "warde", race: "hyur", job: "oracle"},
      {id: 5, name: "tataru", lastname: "taru", race: "lalafell", job: "arcaniste"},
      {id: 6, name: "thancred", lastname: "waters", race: "hyur", job: "surineur / pistosabreur"},
      {id: 7, name: "y'shtola", lastname: "rhul", race: "miqo'te", job: "mage blanc / mage noir"},
      {id: 8, name: "yda", lastname: "hext", race: "hyur", job: "moine"},
      {id: 9, name: "papalymo", lastname: "Totolymo", race: "lalafell", job: "mage blanc"},
      {id: 10, name: "urianger", lastname: "augurelt", race: "elezen", job: "invocateur / astromancien"},
      {id: 11, name: "Moenbryda", lastname: "Wilfsunnwyn", race: "Roegadyn", job: "guerrier"},
    ];
    return {scions};
  }

  // Surpasser le genId pour être sûr que chaque scion a un id, si le tableau est vide, le premier id crée sera 11, sinon ce sera l'id le plus élevé +1

  genId(scions: Scion[]): number {
    return scions.length > 0 ? Math.max(...scions.map(scion => scion.id)) + 1 : 11;
  }
}
