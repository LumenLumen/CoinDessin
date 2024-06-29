import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LanguagebuttonComponent } from './components/languagebutton/languagebutton.component';
import { MenuComponent } from '../components_wilbedel/menu/menu.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SettingService } from './components/languagebutton/languagesettings.service';


@NgModule({
  declarations: [
    HeaderComponent,
    LanguagebuttonComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
