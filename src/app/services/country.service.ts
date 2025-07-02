import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/country';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    console.log("Fetching countries from:", `${environment.url}/country/get-countries`);
    return this.httpClient.get<Country[]>(`${environment.url}/country/get-countries`);
  }
}
