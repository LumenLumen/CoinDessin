import { Component } from '@angular/core';
import { SettingService } from '../../../core/components/languagebutton/languagesettings.service';

@Component({
  selector: 'app-free-art',
  templateUrl: './free-art.component.html',
  styleUrl: './free-art.component.css'
})
export class FreeArtComponent {
  constructor(private settingService: SettingService){}

  getLng(){
    return this.settingService.getLng();
  }
}
