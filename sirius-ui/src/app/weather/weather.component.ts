import { Component, HostListener, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weather:any = []
  constructor(private service: WeatherService) { }

  ngOnInit(): void {
    this.service.getWeatherReport().subscribe((res:any)=>{
      this.weather.push(res)
      console.log(this.weather)
    })
  }

}
