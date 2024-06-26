import { Component } from '@angular/core';

@Component({
  selector: 'app-en-galerie',
  standalone: true,
  imports: [],
  templateUrl: './en-galerie.component.html',
  styleUrl: '../../pages/galerie/galerie.component.css'
})
export class EnGalerieComponent {

  scrollToElement(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
