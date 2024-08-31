import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { SettingService } from '../../../core/components/languagebutton/languagesettings.service';

@Component({
  selector: 'app-small-image',
  templateUrl: './small-image.component.html',
  styleUrl: './small-image.component.css'
})
export class SmallImageComponent {

    @Input() lien !: string ;
    @Input() titre !: string ;
    @Input() description !: string ;
    @Input() owner !: string ;
    @Input() ownerlink !: string ;

    constructor(private settingService: SettingService){}

    getLng(){
      return this.settingService.getLng();
    }
}
