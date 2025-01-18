import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-forecast',
  imports: [CommonModule],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.css'
})
export class WeatherForecastComponent implements OnInit{
  forecasts!: any[];

constructor(private http: HttpClient) { }
ngOnInit(): void {
  this.http.get<any[]>('http://localhost:5185/api/weatherforecast').subscribe(data=>{this.forecasts=data;});
}
}
