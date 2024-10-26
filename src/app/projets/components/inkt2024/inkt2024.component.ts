import { Component } from '@angular/core';
import { SettingService } from '../../../core/components/languagebutton/languagesettings.service';

@Component({
  selector: 'app-inkt2024',
  templateUrl: './inkt2024.component.html',
  styleUrl: './inkt2024.component.css'
})
export class Inkt2024Component {
  constructor(private settingService: SettingService){}

  getLng(){
    return this.settingService.getLng();
  }
}
