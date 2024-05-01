import { Component } from '@angular/core';

@Component({
  selector: 'app-en-commandes',
  standalone: true,
  imports: [],
  templateUrl: './en-commandes.component.html',
  styleUrl: '../../pages/commandes/commandes.component.css'
})
export class EnCommandesComponent {

  scrollToElement(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  
}
