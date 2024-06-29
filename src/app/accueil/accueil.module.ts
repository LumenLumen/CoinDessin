import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './components/main-page/main-page.component';
import { CoreModule } from '../core/core.module';
import { AccueilRoutingModule } from './accueil-routing.module';

import { FRContactComponent } from './components/fr-contact/contact.component';
import { FRWebsiteMAJComponent } from './components/fr-website-maj/website-maj.component';
import { EnContactComponent } from './components/en-contact/en-contact.component';
import { EnWebsiteMAJComponent } from './components/en-website-maj/en-website-maj.component';

@NgModule({
  declarations: [
    FRContactComponent,
    FRWebsiteMAJComponent,
    EnContactComponent,
    EnWebsiteMAJComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    CoreModule
  ]
})
export class AccueilModule {}
