import { Clouds } from "./clouds";
import { Coord } from "./coord";
import { Main } from "./main";
import { Sys } from "./sys";
import { Wind } from "./wind";
import { Weather } from "./weather";

export interface WeatherInterface {
  base: string,
    clouds: Clouds,
    cod: Number,
    coord: Coord,
    dt: number,
    id: number,
    main: Main,
    name: string,
    sys: Sys,
    visibility: number,
    weather: Weather[],
    wind: Wind
};
