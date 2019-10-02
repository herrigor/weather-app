import { WeatherOverview } from './weather.model';
import { City } from './city.model';

export class Forecast {
  constructor(
    public cod: string,
    public message: string,
    public cnt: number,
    public list: WeatherOverview[],
    public city: City,
  ) { }
}