import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { Inkt2024Component } from './components/inkt2024/inkt2024.component';
import { FreeArtComponent } from './components/free-art/free-art.component';
import { CharityArtComponent } from './components/charity-art/charity-art.component';

const routes: Routes = [
  { path: 'charitycomm', component: CharityArtComponent},
  { path: 'inktober2024', component: Inkt2024Component},
  { path: 'freebie', component: FreeArtComponent},
  { path: '', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetsRoutingModule { }
