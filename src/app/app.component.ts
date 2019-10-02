import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isFetching = false;
  error = '';

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private weatherService: WeatherService) {}

  ngOnInit() {
  }

  onFetchCities(searchForm:NgForm) {
    let cityName = searchForm.controls['city'].value;
    this.isFetching = true;

    this.weatherService.fetchCities(cityName).subscribe({
      next: (cities) => {
        this.isFetching = false;        
        this.router.navigate(['/search', cityName],{relativeTo: this.route})
      },
      error: (res) =>{
        console.log(res);
        this.error = res;
      }
    }
      
    );
  }

  ngOnDestroy() {
  }
}
