import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetsRoutingModule } from './projets-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SingleprojectComponent } from './components/singleproject/singleproject.component';
import { Inkt2024Component } from './components/inkt2024/inkt2024.component';


@NgModule({
  declarations: [
    MainPageComponent,
    SingleprojectComponent,
    Inkt2024Component
  ],
  imports: [
    CommonModule,
    ProjetsRoutingModule
  ]
})
export class ProjetsModule { }
