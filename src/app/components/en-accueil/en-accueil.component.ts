import { Component } from '@angular/core';

@Component({
  selector: 'app-en-accueil',
  standalone: true,
  imports: [],
  templateUrl: './en-accueil.component.html',
  styleUrl: '../../pages/accueil/accueil.component.css'
})

export class EnAccueilComponent {

  scrollToElement(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  
}
