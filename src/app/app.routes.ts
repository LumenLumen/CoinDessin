import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'accueil', loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilModule)},
    {path: 'commande', loadChildren: () => import('./commission/commission.module').then(m => m.CommissionModule)},
    {path: 'galerie', loadChildren: () => import('./galerie/galerie.module').then(m => m.GalerieModule)},
    {path: 'projets', loadChildren: () => import('./projets/projets.module').then(m => m.ProjetsModule)},
    {path: '**', redirectTo: 'accueil'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}