import { Component } from '@angular/core';

@Component({
  selector: 'app-en-projets',
  standalone: true,
  imports: [],
  templateUrl: './en-projets.component.html',
  styleUrl: '../../pages/projets/projets.component.css'
})
export class EnProjetsComponent {

  scrollToElement(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  
}
