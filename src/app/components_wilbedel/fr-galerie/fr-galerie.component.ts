import { Component } from '@angular/core';
import { ExpositionComponent } from '../exposition/exposition.component';

@Component({
  selector: 'app-fr-galerie',
  standalone: true,
  imports: [ExpositionComponent],
  templateUrl: './fr-galerie.component.html',
  styleUrl: '../../pages/galerie/galerie.component.css'
})
export class FrGalerieComponent {

  scrollToElement(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
