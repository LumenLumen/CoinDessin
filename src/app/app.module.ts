import { NgModule } from "@angular/core";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { AccueilModule } from "./accueil/accueil.module";
import { CommissionModule } from "./commission/commission.module";
import { GalerieModule } from "./galerie/galerie.module";
import { ProjetsModule } from "./projets/projets.module";
import { CoreModule } from "./core/core.module";

@NgModule({
    declarations: [],
    providers: [
        {
            provide: LocationStrategy, useClass: HashLocationStrategy
        }
    ],
    imports: [
        AccueilModule,
        CommissionModule,
        GalerieModule,
        ProjetsModule,
        CoreModule
    ]
})
export class AppModule {}