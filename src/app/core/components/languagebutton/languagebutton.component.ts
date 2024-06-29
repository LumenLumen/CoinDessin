import { Component } from '@angular/core';
import { SettingService } from './languagesettings.service';

@Component({
  selector: 'app-languagebutton',
  templateUrl: './languagebutton.component.html',
  styleUrl: './languagebutton.component.css'
})
export class LanguagebuttonComponent {

  constructor(private settingService: SettingService) { }

  toggleLng() {
    if (this.settingService) {
      this.settingService.lng === 'fr' ? this.settingService.setLng('en') : this.settingService.setLng('fr');
      localStorage.setItem('lng', this.settingService.lng);
    }
  }

  getLng() : string {
    return this.settingService.getLng();
  }
}
