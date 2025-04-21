import { Component } from '@angular/core';
import { SettingService } from '../../../core/components/languagebutton/languagesettings.service';
import { Router } from '@angular/router';
import { SingleprojectComponent } from "../singleproject/singleproject.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(private settingService: SettingService){}

  getLng(){
    return this.settingService.getLng();
  }
}
