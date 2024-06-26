import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrGalerieComponent } from '../../components_wilbedel/fr-galerie/fr-galerie.component';
import { EnGalerieComponent } from '../../components_wilbedel/en-galerie/en-galerie.component';
import { SettingService } from '../../core/components/languagebutton/languagesettings.service';

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
