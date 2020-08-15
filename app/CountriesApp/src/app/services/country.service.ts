import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getCountryList(): Observable<Country[]>{
    let url = "https://localhost:5001/v1/countries";

    return this.httpClient.get<Country[]>(url)
      .pipe(retry(2),
      catchError(this.handleError));
  }

  getCountryListByName(name: string): Observable<Country[]>{
    let url = "https://localhost:5001/v1/countries/name/" + name;

    return this.httpClient.get<Country[]>(url)
      .pipe(retry(2),
      catchError(this.handleError));
  }

  getCountryListByCurrency(name: string): Observable<Country[]>{
    let url = "https://localhost:5001/v1/countries/currency/" + name;

    return this.httpClient.get<Country[]>(url)
      .pipe(retry(2),
      catchError(this.handleError));
  }

  getCountryListByAlpha(name: string): Observable<Country[]>{
    let url = "https://localhost:5001/v1/countries/alpha/" + name;

    return this.httpClient.get<Country[]>(url)
      .pipe(retry(2),
      catchError(this.handleError));
  }

  getCountryInfoByName(name: string): Observable<Country[]>{
    let url = "https://localhost:5001/v1/countries/info/" + name;

    return this.httpClient.get<Country[]>(url)
      .pipe(retry(2),
      catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = 'Código do erro: ${error.status}, ' + 'menssagem: ${error.message}';
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
