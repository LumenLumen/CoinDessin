import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayCommComponent } from './components/display-comm/display-comm.component';

const routes: Routes = [
  {path: '', component: DisplayCommComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommissionRoutingModule { }
