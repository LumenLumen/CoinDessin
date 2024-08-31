import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtlistComponent } from './components/artlist/artlist.component';
import { FullImageComponent } from './components/full-image/full-image.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {path: ':id', component: FullImageComponent},
  {path: '', component:MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalerieRoutingModule { }
