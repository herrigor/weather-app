import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Search } from './search.model';
import { WeatherOverview } from './weather.model';
import { Forecast } from './forecast.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  cityChanged = new Subject<WeatherOverview[]>();
  forecastChanged = new Subject<Forecast[]>();

  private cityList = [];
  private cityForecast = [];

  constructor(private http: HttpClient) {}

  fetchCities(cityName){
    this.cityList = [];
    
    return this.http
    .get<Search>(
      'https://api.openweathermap.org/data/2.5/find?appId=76d1b43ba3695cfae59aa9f7dc9b4877&units=metric&q='+cityName,
      )
      .pipe(
        map((response:Search) => {
          const list = response.list;
          for(const key in list){
            if(list.hasOwnProperty(key)){
              this.cityList.push({...list[key]});
            }
          }
          return this.cityChanged.next(this.cityList.slice());
        })
      );
  }

  weatherForecast(cityID){
    return this.http
      .get<Forecast[]>(
        'https://api.openweathermap.org/data/2.5/forecast?appId=76d1b43ba3695cfae59aa9f7dc9b4877&units=metric&id='+cityID
      ).pipe(
        map((response:Forecast[]) => {
          this.cityForecast.push({...response});
          return this.forecastChanged.next(this.cityForecast.slice())
        })
      ).subscribe();
  }




}
