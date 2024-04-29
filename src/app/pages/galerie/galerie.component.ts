import { Component } from '@angular/core';
import { ExpositionComponent } from '../../components/exposition/exposition.component';

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [ExpositionComponent],
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.css'
})
export class GalerieComponent {
  scrollToElement(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
