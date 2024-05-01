import { Component } from '@angular/core';

@Component({
  selector: 'app-fr-accueil',
  standalone: true,
  imports: [],
  templateUrl: './fr-accueil.component.html',
  styleUrl: '../../pages/accueil/accueil.component.css'
})
export class FrAccueilComponent {
  
  scrollToElement(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
