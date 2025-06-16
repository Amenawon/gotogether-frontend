import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenerateItinerary } from '../model/generate-itinerary';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  constructor(private httpClient:HttpClient) { }

  generateItinerary(payload: GenerateItinerary): Observable<string> {
    return this.httpClient.post<string>(`${environment.url}/itinerary/generate`, payload, { responseType: 'text' as 'json' });
  }
}
