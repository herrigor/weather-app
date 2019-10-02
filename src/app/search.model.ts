import { WeatherOverview } from './weather.model';

export class Search {
  constructor(
    public cod: string,
    public count: number,
    public list: WeatherOverview[],
    public message: string,
  ) { }
}