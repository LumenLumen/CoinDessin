import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import { GalerieComponent } from "./pages/galerie/galerie.component";
import { CommandesComponent } from "./pages/commandes/commandes.component";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { ProjetsComponent } from "./pages/projets/projets.component";

import { MenuComponent } from "./components/menu/menu.component";
import { HeaderComponent } from "./components/header/header.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/pages/accueil', pathMatch: 'full' },
    { path: 'pages/accueil', component: AccueilComponent},
    { path: 'pages/commandes', component: CommandesComponent },
    { path: 'pages/galerie', component: GalerieComponent},
    { path: 'pages/projets', component: ProjetsComponent}
];

@NgModule({
    declarations: [
        AccueilComponent,
        CommandesComponent,
        GalerieComponent,
        ProjetsComponent
    ],
    providers: [
        {
            provide: LocationStrategy, useClass: HashLocationStrategy
        }
    ],
    imports: [
        MenuComponent,
        HeaderComponent,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppModule {}