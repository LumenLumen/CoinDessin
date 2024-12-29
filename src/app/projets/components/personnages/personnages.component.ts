import { Component } from '@angular/core';
import { SettingService } from '../../../core/components/languagebutton/languagesettings.service';

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrl: './personnages.component.css'
})
export class PersonnagesComponent {
  constructor(private settingService: SettingService){}

  getLng(){
    return this.settingService.getLng();
  }
}
