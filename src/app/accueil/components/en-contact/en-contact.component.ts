import { Component } from '@angular/core';
import { ContactWay } from '../../models/contactway.model';

@Component({
  selector: 'app-en-contact',
  templateUrl: './en-contact.component.html',
  styleUrl: '../fr-contact/contact.component.css'
})
export class EnContactComponent {
  contacts = new Array<ContactWay>();
  
  ngOnInit (){
    this.contacts = [
      {id : 1, reseau : "Toyhou.se", pseudo : "Newni", link : "https://toyhou.se/Newni"},
      {id : 2, reseau : "Discord", pseudo : "newni", link : "https://discord.gg/AECpnHhF2d"},
      {id : 3, reseau : "ArtFight", pseudo : "Newni", link : "https://artfight.net/~Newni"},
      {id : 4, reseau : "Ko-Fi (inactive)", pseudo : "Lumen", link : "https://ko-fi.com/lumen"},
      {id : 5, reseau : "Dappervolk (inactive)", pseudo : "Lumens", link : "https://dappervolk.com/profile/41489"},
      {id : 6, reseau : "ArtFol (inactive)", pseudo : "lumen_crey", link : "https://www.artfol.co/lumen_crey"},
      {id : 7, reseau : "VGen", pseudo : "Newni", link : "https://vgen.co/Newni"},
    ];
  }
}
