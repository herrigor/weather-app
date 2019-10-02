export class WeatherOverview {
  constructor(
    public clouds: {string:number}[],
    public coord: {string:number}[],
    public dt: number,
    public id: number,
    public name: string,
    public main: {string:number}[],
    public rain: string,
    public snow: string,
    public sys: {string:string}[],
    public weather: string,
    public wind: string,
  ) { }
}