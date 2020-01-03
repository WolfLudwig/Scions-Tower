import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service'
import { Scion } from './scion';

@Injectable({
  providedIn: 'root'
})
export class ScionService {

  private scionsUrl = 'api/scions';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // Obtiens les données depuis le server
  getScions(): Observable<Scion[]> {
    return this.http.get<Scion[]>(this.scionsUrl)
    .pipe(
      tap(_ => this.log('Les Héritiers sont arrivés !')),
      catchError(this.handleError<Scion[]>('getScions', []))
    );
  }

  // Obtiens les données d'un scion par l'id, 404 si pas trouvé
  getScion(id: number): Observable<Scion> {
    const url = `${this.scionsUrl}/${id}`;
    return this.http.get<Scion>(url).pipe(
      tap(_ => this.log(`Héritier au rapport ! (${id})`)),
      catchError(this.handleError<Scion>(`Il n'y pas d'héritier répondant à l'id ${id}`))
    );
    
  }

  
  // met à jour certaines infos
  updateScion( scion : Scion): Observable<any>{
    return this.http.put(this.scionsUrl, scion, this.httpOptions).pipe(
      tap(_ => this.log(`Héritier mis à jour!`)),
      catchError(this.handleError<any>('updateScion'))
    )
  }

  // ajoute un nouvel héritier
  addScion (scion: Scion): Observable<Scion> {
    return this.http.post<Scion>(this.scionsUrl, scion, this.httpOptions).pipe(
      tap((newScion: Scion) => this.log(`added Scion w/ id=${newScion.id}`)),
      catchError(this.handleError<Scion>('addScion'))
    )
  }

  // supprime l'héritier
  deleteScion(scion : Scion | number ): Observable<Scion> {
    const id = typeof scion === 'number' ? scion : scion.id;
    const url = `${this.scionsUrl}/${id}`;

    return this.http.delete<Scion>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Héritier ${id} supprimé`)),
      catchError(this.handleError<Scion>('deleteScion'))
    );
  }

  // permet de chercher l'héritier en fonction des lettre de son prénom
  searchScions(term :string): Observable<Scion[]> {
    if (!term.trim()) {
      // si n'existe pas, ne renvoie rien
      return of([]);
    }
    return this.http.get<Scion[]>(`${this.scionsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`Héritiers comprenant la lettre "${term}"`)),
      catchError(this.handleError<Scion[]>('searchScions', []))
    );
  }

  // Log a ScionService message with the MessageService
  private log(message: string) {
  this.messageService.add(`ScionService: ${message}`);
}
  // Une methode pour permettre à l'application de fonctionner malgré une erreur 
  // @param operation - nom de l'opération qui a échoué
  // @param result - valeur optionnelle pour renvoyer le résultat
  private handleError<T> (operation = 'operation', result?: T){
    return (error : any ): Observable<T> =>{
      // envoie l'erreur à l'infrastructure
      console.error(error);
      // Le visuel de l'erreur pour l'utilisateur
      this.log(`${operation} failed : ${error.message}`);
      // Permet à l'app de fonctionner en revoyant un resultat vide
      return of (result as T);
    } 
  }
}
