import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getCountryByCode(code: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/alpha/${code}`);
  }

  getCountriesByCodes(codes: string[]): Observable<any> {
    return this.http.get(`${this.apiUrl}/alpha?codes=${codes.join(',')}`);
  }
}
