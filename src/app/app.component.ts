import { Component, OnInit } from '@angular/core';
import { weatherData } from './model/weather.model';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) { }
  weatherData?: weatherData;

  ngOnInit(): void {
    this.getweatherData(this.cityName);
    this.cityName = ''
  }
  cityName: string = 'Rades';
  onSubmit() {
    this.getweatherData(this.cityName);
    this.cityName = ''
  }
  private getweatherData(cityName: string) {

    this.weatherService.getWeather(cityName).subscribe(
      {
        next: (response) => { this.weatherData = response; console.log(response) }
      })
  }
}
