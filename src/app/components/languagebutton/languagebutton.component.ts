import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingService } from './languagesettings.service';

@Component({
  selector: 'app-languagebutton',
  standalone: true,
  imports: [CommonModule],
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
