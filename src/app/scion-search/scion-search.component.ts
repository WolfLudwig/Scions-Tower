import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { 
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Scion } from '../scion';
import { ScionService} from '../scion.service';

@Component({
  selector: 'app-scion-search',
  templateUrl: './scion-search.component.html',
  styleUrls: ['./scion-search.component.css']
})
export class ScionSearchComponent implements OnInit {
  scions$: Observable<Scion[]>;
  private searchTerms = new Subject<string>();

  constructor(private scionService: ScionService) { }

  // Envoie la recherche
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.scions$ = this.searchTerms.pipe(
      // délai de 300ms pour considérer l'entrée comme un recherche
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.scionService.searchScions(term)),
    );
  }

}
