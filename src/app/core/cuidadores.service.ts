import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Cuidador } from '../shared/cuidador';

@Injectable({
  providedIn: 'root',
})
export class CuidadoresService {
  private CuidadorUrl = 'api/Cuidador';

  constructor(private http: HttpClient) {}

  getCuidador(): Observable<Cuidador[]> {
    return this.http.get<Cuidador[]>(this.CuidadorUrl).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getMaxCuidadorId(): Observable<number> {
    return this.http.get<Cuidador[]>(this.CuidadorUrl).pipe(
      // Get max value from an array
      map((data) =>
        Math.max.apply(
          Math,
          data.map(function (o) {
            return o.id;
          })
        )
      ),
      catchError(this.handleError)
    );
  }

  getCuidadorById(id: number): Observable<Cuidador> {
    const url = `${this.CuidadorUrl}/${id}`;
    return this.http.get<Cuidador>(url).pipe(
      tap((data) => console.log('getProduct: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  createCuidador(cuidador:Cuidador ): Observable<Cuidador> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    cuidador.id = 0;
    return this.http
      .post<Cuidador>(this.CuidadorUrl, cuidador, { headers: headers })
      .pipe(
        tap((data) => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteCuidador(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.CuidadorUrl}/${id}`;
    return this.http.delete<Cuidador>(url, { headers: headers }).pipe(
      tap((data) => console.log('deleteProduct: ' + id)),
      catchError(this.handleError)
    );
  }

  updateCuidador(cuidador: Cuidador): Observable<Cuidador> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.CuidadorUrl}/${cuidador.id}`;
    return this.http.put<Cuidador>(url, cuidador, { headers: headers }).pipe(
      tap(() => console.log('updateProduct: ' + cuidador.id)),
      // Return the product on an update
      map(() => cuidador),
      catchError(this.handleError)
    );
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
