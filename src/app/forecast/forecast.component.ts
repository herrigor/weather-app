import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { WeatherService } from '../weather.service';
import { Forecast } from '../forecast.model';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit, OnDestroy {
  isFetching = false;
  error = '';
  forecastSub: Subscription = new Subscription();
  forecast;

  constructor(private route: ActivatedRoute,private weatherService: WeatherService) { }

  ngOnInit() {
    this.isFetching = true;
    this.weatherService.weatherForecast(this.route.snapshot.params.id);

    this.forecastSub = this.weatherService.forecastChanged.subscribe({
      next: (response) => {
        this.isFetching = false;
        this.forecast = response;
      },
      error: (res) => {
        this.error = res;
      }
    }
    );
  }
  ngOnDestroy(){
    this.forecastSub.unsubscribe();
  }
}
