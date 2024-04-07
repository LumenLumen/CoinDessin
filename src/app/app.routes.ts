import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { GalerieComponent } from './pages/galerie/galerie.component';
import { ProjetsComponent } from './pages/projets/projets.component';


export const routes: Routes = [
    { path: '', redirectTo: '/pages/accueil', pathMatch: 'full' },
    { path: 'pages/accueil', component: AccueilComponent},
    { path: 'pages/commandes', component: CommandesComponent },
    { path: 'pages/galerie', component: GalerieComponent},
    { path: 'pages/projets', component: ProjetsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
