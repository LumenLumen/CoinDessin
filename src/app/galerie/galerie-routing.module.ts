import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtlistComponent } from './components/artlist/artlist.component';
import { FullImageComponent } from './components/full-image/full-image.component';

const routes: Routes = [
  {path: ':id', component: FullImageComponent},
  {path: '', component:ArtlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalerieRoutingModule { }
