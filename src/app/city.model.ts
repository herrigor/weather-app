import { WeatherOverview } from './weather.model';

export class City {
    constructor(
      public id: number,
      public name: string,
      public coord: {lat:number, lon:number},
      public list: WeatherOverview[],
      public country: string,
      public sunrise?: string,
      public sunset?: string,
      public timezone?: string,
    ) { }
  }