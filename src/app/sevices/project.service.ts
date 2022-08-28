import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Project } from '../models/project';
import { Observable, of } from 'rxjs';
import { Contact } from '../models/contact';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`); - VER TUTORIAL ANGULAR
  }
 

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${base_url}/projects`)
      .pipe(
        catchError(this.handleError<Project[]>('getProjects', []))
      );
  }

  sendEmail(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${base_url}/contacts`, contact).pipe(
      tap((newContact: Contact) => this.log(`contact w/ name=${newContact.name}`)),
      catchError(this.handleError<Contact>('sendEmail'))
    );
  }
  

  

}
