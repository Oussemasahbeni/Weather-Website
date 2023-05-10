import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { weatherData } from '../model/weather.model';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'b74487bae9c63f4f5938909c8be755cd';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<weatherData> {
    let params = new HttpParams().set('q', city).set('appid', this.apiKey).set('units', 'metric');
    return this.http.get<weatherData>(`${this.baseUrl}weather`, { params });
  }
}
