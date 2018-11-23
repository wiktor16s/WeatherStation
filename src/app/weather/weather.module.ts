import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TileComponent } from './tile/tile.component';
import { TileWroclawComponent } from './tile-wroclaw/tile-wroclaw.component';
import { TileCracowComponent } from './tile-cracow/tile-cracow.component';
import { TileWarsawComponent } from './tile-warsaw/tile-warsaw.component';
import { TileGdanskComponent } from './tile-gdansk/tile-gdansk.component';
import { TilePoznanComponent } from './tile-poznan/tile-poznan.component';
import { TileKatowiceComponent } from './tile-katowice/tile-katowice.component';
import { TileKielceComponent } from './tile-kielce/tile-kielce.component';
import { TileSzczecinComponent } from './tile-szczecin/tile-szczecin.component';
import { TileTorunComponent } from './tile-torun/tile-torun.component';

@NgModule({
  declarations: [MainComponent, TileComponent, DropdownComponent, TileWroclawComponent, TileCracowComponent, TileWarsawComponent, TileGdanskComponent, TilePoznanComponent, TileKatowiceComponent, TileKielceComponent, TileSzczecinComponent, TileTorunComponent],
  imports: [
    CommonModule,
    NgbModule,
    
  ],
  exports:[MainComponent, TileComponent, DropdownComponent,]
})
export class WeatherModule { }
