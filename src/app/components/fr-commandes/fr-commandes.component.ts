import { Component } from '@angular/core';

@Component({
  selector: 'app-fr-commandes',
  standalone: true,
  imports: [],
  templateUrl: './fr-commandes.component.html',
  styleUrl: '../../pages/commandes/commandes.component.css'
})
export class FrCommandesComponent {

  scrollToElement(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  
}
