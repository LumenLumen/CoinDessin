import { Component, OnInit } from '@angular/core';
import { ContactWay } from '../../models/contactway.model';

@Component({
  selector: 'fr-app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class FRContactComponent implements OnInit{

  contacts = new Array<ContactWay>();
  
  ngOnInit (){
    this.contacts = [
      {id : 1, reseau : "Toyhou.se", pseudo : "lumen_crey", link : "https://toyhou.se/lumen_crey"},
      {id : 2, reseau : "Discord", pseudo : "newni", link : "https://discord.gg/2Dg8gFT7KN"},
      {id : 3, reseau : "ArtFight", pseudo : "Newni", link : "https://artfight.net/~Newni"},
      {id : 4, reseau : "Ko-Fi", pseudo : "Lumen", link : "https://ko-fi.com/lumen"},
      {id : 5, reseau : "Dappervolk", pseudo : "Lumens", link : "https://dappervolk.com/profile/41489"},
      {id : 6, reseau : "ArtFol", pseudo : "lumen_crey", link : "https://www.artfol.co/lumen_crey"},
    ];
  }
}
