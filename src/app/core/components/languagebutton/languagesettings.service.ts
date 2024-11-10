import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  lng: 'fr' | 'en' = 'fr'; // Par défaut, la langue est définie sur français

  setLng(lng: 'fr' | 'en'): void {
    this.lng = lng;
  }

  getLng(): string{
    return this.lng ;
  }
}
