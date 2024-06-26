import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactWayService } from './services/contact-way.service';
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
    CommonModule
  ],
})
export class AccueilModule { }
