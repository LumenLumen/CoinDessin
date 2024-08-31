import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalerieRoutingModule } from './galerie-routing.module';
import { ArtlistComponent } from './components/artlist/artlist.component';
import { FullImageComponent } from './components/full-image/full-image.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SmallImageComponent } from './components/small-image/small-image.component';


@NgModule({
  declarations: [
    ArtlistComponent,
    FullImageComponent,
    MainPageComponent,
    SmallImageComponent
  ],
  imports: [
    CommonModule,
    GalerieRoutingModule
  ]
})
export class GalerieModule { }
