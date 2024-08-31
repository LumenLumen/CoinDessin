import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SettingService } from '../../../core/components/languagebutton/languagesettings.service';

@Component({
  selector: 'app-priceform',
  templateUrl: './priceform.component.html',
  styleUrl: './priceform.component.css'
})
export class PriceformComponent {

  constructor (private settingService:SettingService){};

  getLng(){
    return this.settingService.getLng();
  }

  tier = new FormControl('por');
  perso = new FormControl('nor');
  nbperso = new FormControl('1');
  minprice = 15.0 ;
  maxprice = 200.0 ;

  updateTier(value : string) {    
    this.tier.setValue(value);
    this.updatePrice();
  }

  updatePerso(value : string){
    this.perso.setValue(value);
    this.updatePrice();
  }

  updateNbPerso(value : string){
    this.nbperso.setValue(value);
    this.updatePrice();
  }

  updatePrice(){

    switch (this.tier.value){
      case 'por':
        this.minprice = 15 ; this.maxprice = 20 ;
        break;
      case 'hal':
        this.minprice = 20 ; this.maxprice = 30 ;
        break;
      case 'ful':
        this.minprice = 30 ; this.maxprice = 45 ;
        break;
      case 'exp':
        this.minprice = 30 ; this.maxprice = 40 ;
        break;
      case 'sce':
        this.minprice = 30 ; this.maxprice = 70 ;
        break;
      case 'bdp':
        this.minprice = 15 ; this.maxprice = 15 ;
        break;
      case 'ani':
        this.minprice = 25 ; this.maxprice = 35 ;
        break;
      case 'skp':
        this.minprice = 20 ; this.maxprice = 30 ;
        break;
    }

    switch (this.perso.value){
      case 'sha':
        this.minprice = this.minprice * 0.5 ; this.maxprice = this.maxprice * 0.5 ;
        break;
      case 'sim' :
        this.minprice = this.minprice * 0.8 ; this.maxprice = this.maxprice * 0.8 ;
        break ;
      case 'dif' :
        this.minprice = this.minprice * 1.3 ; this.maxprice = this.maxprice * 1.3 ;
        break;
    }

    switch (this.nbperso.value){
      case "2" :
        this.minprice = this.minprice * 1.9 ; this.maxprice = this.maxprice * 1.9 ;
        break ;
      case "3" :
        this.minprice = this.minprice * 3 ; this.maxprice = this.maxprice * 3 ;
        break;
      case "4" :
        this.minprice = this.minprice * 3.8 ; this.maxprice = this.maxprice * 3.8 ;
        break;
    }

    this.maxprice = Math.ceil(this.maxprice);
    this.minprice = Math.ceil(this.minprice);

    //Contrôle <15
    if (this.minprice < 15){
      this.minprice = 15 ;
    }
    if (this.maxprice < 15){
      this.maxprice = 15 ;
    }
  }
    
}
