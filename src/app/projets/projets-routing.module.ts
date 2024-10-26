import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SingleprojectComponent } from './components/singleproject/singleproject.component';
import { Inkt2024Component } from './components/inkt2024/inkt2024.component';

const routes: Routes = [
  { path: 'inktober2024', component: Inkt2024Component},
  { path: '', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetsRoutingModule { }
