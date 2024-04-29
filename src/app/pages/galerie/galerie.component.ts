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

}
