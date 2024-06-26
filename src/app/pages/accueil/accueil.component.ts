import { Component } from '@angular/core';
import { FrAccueilComponent } from '../../components_wilbedel/fr-accueil/fr-accueil.component';
import { EnAccueilComponent } from '../../components_wilbedel/en-accueil/en-accueil.component';
import { SettingService } from '../../core/components/languagebutton/languagesettings.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,
  templateUrl: './accueil.component.html',
  imports: [FrAccueilComponent, EnAccueilComponent, CommonModule],
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  constructor(public settingsService: SettingService) { }
}
