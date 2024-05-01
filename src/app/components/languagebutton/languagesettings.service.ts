import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  lng: 'fr' | 'en' = 'fr'; // Par défaut, la langue est définie sur français

  constructor() { }

  setLng(lng: 'fr' | 'en'): void {
    this.lng = lng;
    // Ajouter ou retirer les classes CSS pour le thème
    if (lng === 'fr') {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }
  }
}
