import { Component } from '@angular/core';

@Component({
  selector: 'app-fr-projets',
  standalone: true,
  imports: [],
  templateUrl: './fr-projets.component.html',
  styleUrl: '../../pages/projets/projets.component.css'
})
export class FrProjetsComponent {

  scrollToElement(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  
}
