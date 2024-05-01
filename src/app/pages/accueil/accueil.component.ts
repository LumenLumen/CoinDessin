import { Component } from '@angular/core';
import { FrAccueilComponent } from '../../components/fr-accueil/fr-accueil.component';
import { EnAccueilComponent } from '../../components/en-accueil/en-accueil.component';
import { SettingService } from '../../components/languagebutton/languagesettings.service';
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
