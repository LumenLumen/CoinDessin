import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
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

  constructor(private router: Router) {}

  navigate(link: string): void {
    this.router.navigateByUrl(link);
  }
}
