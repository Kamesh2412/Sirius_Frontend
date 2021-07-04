import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { MasterComponent } from './master/master.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path: '', component:MasterComponent,
  children: [
    {path:'weather', component:WeatherComponent},
    {path:'getQuote', component:GetQuoteComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
