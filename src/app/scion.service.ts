import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'
import { Scion } from './scion';
import { SCIONS } from './mock-scions';

@Injectable({
  providedIn: 'root'
})
export class ScionService {

  constructor(private messageService: MessageService) { }

  getScions(): Observable<Scion[]> {
    // Envoie le message après la requête.
    this.messageService.add('Les héritiers sont arrivés!')
    return of(SCIONS);
  }
}
