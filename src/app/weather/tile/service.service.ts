import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import { WeatherInterface } from '../models/weatherModels';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=Wroc%C5%82aw&appid=84aea1ab45e8d501835d9128346165db";
  constructor(private http:Http) { }

  getWeather() : Observable<WeatherInterface>{
    return this.http.get(this.apiUrl).map((res) => res.json())
  }

}
