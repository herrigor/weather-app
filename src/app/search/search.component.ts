import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { WeatherOverview } from '../weather.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  error = '';
  citySearchSub: Subscription = new Subscription();
  cities: WeatherOverview[] = [];

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) {
    this.route.paramMap.subscribe(params=>{
      this.weatherService.fetchCities(params.get('id')).subscribe()
    });
  }

  ngOnInit() {
    this.citySearchSub = this.weatherService.cityChanged.subscribe({
      next: (response) => {
        this.cities = response;
      },
      error: (res) => {
        this.error = res;
      }
    });
  }
  ngOnDestroy(){
    this.citySearchSub.unsubscribe();
  }
}
