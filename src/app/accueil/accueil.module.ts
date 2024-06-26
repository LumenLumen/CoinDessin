import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilRoutingModule } from './accueil-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { WebsiteMAJComponent } from './components/website-maj/website-maj.component';
import { MainPageComponent } from './components/main-page/main-page.component';


@NgModule({
  declarations: [
    ContactComponent,
    WebsiteMAJComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule
  ],
})
export class AccueilModule { }
