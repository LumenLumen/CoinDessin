import { Component } from '@angular/core';
import { SettingService } from './languagesettings.service';

@Component({
  selector: 'app-languagebutton',
  templateUrl: './languagebutton.component.html',
  styleUrl: './languagebutton.component.css'
})
export class LanguagebuttonComponent {

  constructor(public settingsService: SettingService) { }

  toggleLng() {
    if (this.settingsService) {
      this.settingsService.lng = this.settingsService.lng === 'fr' ? 'en' : 'fr';
      localStorage.setItem('lng', this.settingsService.lng);
    }
  }
}
