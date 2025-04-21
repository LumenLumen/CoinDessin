import { Component } from '@angular/core';
import { SettingService } from '../../../core/components/languagebutton/languagesettings.service';

@Component({
  selector: 'app-supportgift',
  templateUrl: './supportgift.component.html',
  styleUrl: './supportgift.component.css'
})
export class SupportgiftComponent {
  constructor(private settingService: SettingService){}

  getLng(){
    return this.settingService.getLng();
  }
}
