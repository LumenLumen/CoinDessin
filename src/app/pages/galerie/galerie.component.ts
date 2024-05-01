import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrGalerieComponent } from '../../components/fr-galerie/fr-galerie.component';
import { EnGalerieComponent } from '../../components/en-galerie/en-galerie.component';
import { SettingService } from '../../components/languagebutton/languagesettings.service';

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [CommonModule, FrGalerieComponent, EnGalerieComponent],
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.css'
})
export class GalerieComponent {
  constructor(public settingsService: SettingService) { }
}
