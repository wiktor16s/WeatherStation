import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import { WeatherInterface } from '../models/weatherModels';

@Injectable({
  providedIn: 'root'
})
export class WarsawServiceService {
  private apiId : string = "d8303c143417562c7d2f97445dd11810"
  private apiUrl : string = "http://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid="+this.apiId;
    constructor(private http:Http) { }

  getWeather() : Observable<WeatherInterface>{
      return this.http.get(this.apiUrl).map((res) => res.json())
    }

}
