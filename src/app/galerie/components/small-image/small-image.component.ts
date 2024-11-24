import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SettingService } from '../../../core/components/languagebutton/languagesettings.service';

@Component({
  selector: 'app-small-image',
  templateUrl: './small-image.component.html',
  styleUrl: './small-image.component.css'
})
export class SmallImageComponent implements OnInit {

    @Input() lien !: string ;
    @Input() titre !: string ;
    @Input() description !: string ;
    @Input() owner !: string ;
    @Input() ownerlink !: string ;
    @Input() annee !: string ;

    post = "_lourd";

    constructor(private settingService: SettingService){}
    ngOnInit(): void {
      this.post = this.lien.replace(this.annee, this.annee.concat("_lourd"));
    }

    getLng(){
      return this.settingService.getLng();
    }
}
