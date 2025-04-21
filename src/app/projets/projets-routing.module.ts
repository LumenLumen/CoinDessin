import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CharityArtComponent } from './components/charity-art/charity-art.component';
import { PersonnagesComponent } from './components/personnages/personnages.component';
import { Inkt2024Component } from './components/inkt2024/inkt2024.component';
import { SupportgiftComponent } from './components/supportgift/supportgift.component';

const routes: Routes = [
  { path: 'supportgift', component: SupportgiftComponent},
  { path: 'characters', component: PersonnagesComponent},
  { path: 'charitycomm', component: CharityArtComponent},
  { path: 'inktober2024', component: Inkt2024Component},
  { path: '', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetsRoutingModule { }
