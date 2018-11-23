import { Component, OnInit } from '@angular/core';
import { WeatherInterface } from '../models/weatherModels';
import { WarsawServiceService } from './warsaw-service.service';

@Component({
  selector: 'ws-tile-warsaw',
  templateUrl: './tile-warsaw.component.html',
  styleUrls: ['./tile-warsaw.component.css']
})
export class TileWarsawComponent implements OnInit {

  Weather : WeatherInterface = {
    base: "",
    clouds: {
      all: 0
    },
    cod: 0,
    coord: {
      lon: 0,
      lat: 0
    },
    dt: 0,
    id: 0,
    main: {
      temp: 0,
      pressure: 0,
      humidity: 0,
      temp_min: 0,
      temp_max: 0
    },
    name: "",
    sys: {
      type: 0,
      id: 0,
      message: 0,
      country: "",
      sunrise: 0,
      sunset: 0,
    },
    visibility: 0,
    weather: [{
      description: "",
      icon: "",
      id: 0,
      main: ""
    }],
    wind: {
      speed: 0,
      deg: 0
    }
};

  constructor(private WarsawServiceService : WarsawServiceService) { }

  ngOnInit() {
    if(WarsawServiceService){
      this.loadWeather();
    }
  }

  loadWeather() : void {
    this.WarsawServiceService.getWeather().subscribe((weather) =>{

      this.Weather.base = weather.base;
      this.Weather.clouds.all = weather.clouds.all;
      this.Weather.cod = weather.cod;
      this.Weather.coord.lat = weather.coord.lat;
      this.Weather.coord.lon = weather.coord.lon;
      this.Weather.dt = weather.dt;
      this.Weather.id = weather.id;
      this.Weather.main.humidity = weather.main.humidity;
      this.Weather.main.pressure = weather.main.pressure;
      this.Weather.main.temp = Math.round((weather.main.temp-273.15)*2)/2;;
      this.Weather.main.temp_max = Math.round((weather.main.temp_max-273.15)*2)/2;;
      this.Weather.main.temp_min = Math.round((weather.main.temp_min-273.15)*2)/2;;
      this.Weather.name = weather.name;
      this.Weather.sys.type = weather.sys.type;
      this.Weather.sys.id = weather.sys.id;
      this.Weather.sys.message = weather.sys.message;
      this.Weather.sys.country = weather.sys.country;
      this.Weather.sys.sunrise = weather.sys.sunrise;
      this.Weather.sys.sunset = weather.sys.sunset;
      this.Weather.visibility = weather.visibility;
      this.Weather.weather = weather.weather;
      this.Weather.wind.deg = weather.wind.deg;
      this.Weather.wind.speed = weather.wind.speed;
    })
  }
}
