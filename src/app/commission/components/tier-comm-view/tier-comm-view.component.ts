import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { SettingService } from '../../../core/components/languagebutton/languagesettings.service';

@Component({
  selector: 'app-tier-comm-view',
  templateUrl: './tier-comm-view.component.html',
  styleUrl: './tier-comm-view.component.css'
})
export class TierCommViewComponent {

    @Input() name !: String ;
    @Input() tat !: number 
    @Input() info !: string ;

    constructor(private settingService: SettingService){}

    getLng(){
      return this.settingService.getLng();
    }
}
