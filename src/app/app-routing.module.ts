import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'search/:id', component: SearchComponent},
  { path: 'details/:id', component: ForecastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
