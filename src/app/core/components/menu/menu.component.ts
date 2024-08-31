import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingService } from '../languagebutton/languagesettings.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {

  constructor(private settingService: SettingService, private router: Router){}

  getLng(){
    return this.settingService.getLng();
  }

  activeLinkIndex: number = -1;

  navLinks = [
    {
      label: 'Accueil',
      link: '/pages/accueil',
      index: 0
    },
    {
      label: 'Commandes',
      link: '/pages/commandes',
      index: 1
    },
    {
      label: 'Galerie',
      icon: 'home',
      link: '/pages/galerie',
      index: 2
    },
    {
      label: 'Projets',
      link: '/pages/projets',
      index: 3
    }
  ];

  navigate(link: string): void {
    this.router.navigateByUrl(link);
  }
}
