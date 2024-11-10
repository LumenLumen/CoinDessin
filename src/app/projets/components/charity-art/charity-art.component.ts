import { Component } from '@angular/core';
import { SettingService } from '../../../core/components/languagebutton/languagesettings.service';

@Component({
  selector: 'app-charity-art',
  templateUrl: './charity-art.component.html',
  styleUrl: './charity-art.component.css'
})
export class CharityArtComponent {
  constructor(private settingService: SettingService){}

  getLng(){
    return this.settingService.getLng();
  }
}
