import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/country';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Fetches the list of countries from the server.
   * @returns An observable of an array of Country objects.
   */
  getCountries():Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${environment.url}/country/countries`);
  }
}
