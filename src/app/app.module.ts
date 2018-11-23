import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './weather/tile/service.service';
import { HttpModule } from '@angular/http';
import { WroclawServiceService } from './weather/tile-wroclaw/wroclaw-service.service';
import { CracowServiceService } from './weather/tile-cracow/cracow-service.service';
import { WarsawServiceService } from './weather/tile-warsaw/warsaw-service.service';
import { GdanskServiceService } from './weather/tile-gdansk/gdansk-service.service';
import { PoznanServiceService } from './weather/tile-poznan/poznan-service.service';
import { KatowiceServiceService } from './weather/tile-katowice/katowice-service.service';
import { KielceServiceService } from './weather/tile-kielce/kielce-service.service';
import { SzczecinServiceService } from './weather/tile-szczecin/szczecin-service.service';
import { TorunServiceService } from './weather/tile-torun/torun-service.service';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,  
    WeatherModule,
    HttpModule
  ],

  declarations: [
    AppComponent
  ],

  providers: [ServiceService, WroclawServiceService, CracowServiceService, WarsawServiceService, GdanskServiceService,
              PoznanServiceService, KatowiceServiceService, KielceServiceService, SzczecinServiceService,
              TorunServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
