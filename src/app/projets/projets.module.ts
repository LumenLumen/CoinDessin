import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetsRoutingModule } from './projets-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SingleprojectComponent } from './components/singleproject/singleproject.component';
import { Inkt2024Component } from './components/inkt2024/inkt2024.component';
import { CharityArtComponent } from './components/charity-art/charity-art.component';
import { FreeArtComponent } from './components/free-art/free-art.component';


@NgModule({
  declarations: [
    MainPageComponent,
    SingleprojectComponent,
    Inkt2024Component,
    CharityArtComponent,
    FreeArtComponent
  ],
  imports: [
    CommonModule,
    ProjetsRoutingModule
  ]
})
export class ProjetsModule { }
