import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrCommandesComponent } from '../../components/fr-commandes/fr-commandes.component';
import { EnCommandesComponent } from '../../components/en-commandes/en-commandes.component';
import { SettingService } from '../../components/languagebutton/languagesettings.service';

@Component({
  selector: 'app-commandes',
  standalone: true,
  templateUrl: './commandes.component.html',
  styleUrl: './commandes.component.css',
  imports: [FrCommandesComponent, EnCommandesComponent, CommonModule]
})

export class CommandesComponent {

  constructor(public settingsService: SettingService) { }
}
