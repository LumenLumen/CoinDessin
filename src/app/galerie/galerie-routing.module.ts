import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtListComponent } from './components/art-list/art-list.component';

const routes: Routes = [
  {path: '', component:ArtListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalerieRoutingModule { }
