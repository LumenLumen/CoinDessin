import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { SettingService } from '../../../core/components/languagebutton/languagesettings.service';

@Component({
  selector: 'app-singleproject',
  templateUrl: './singleproject.component.html',
  styleUrl: './singleproject.component.css'
})
export class SingleprojectComponent {

  @Input() title !: string;
  @Input() color !: string;
  @Input() image !: string;
  @Input() desc !: string;

  constructor(private settingService: SettingService){}

  getLng(){
    return this.settingService.getLng();
  }
}
