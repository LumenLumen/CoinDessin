import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrProjetsComponent } from '../../components_wilbedel/fr-projets/fr-projets.component';
import { EnProjetsComponent } from '../../components_wilbedel/en-projets/en-projets.component';
import { SettingService } from '../../core/components/languagebutton/languagesettings.service';


@Component({
  selector: 'app-projets',
  standalone:true,
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css',
  imports: [CommonModule, FrProjetsComponent, EnProjetsComponent]
})
export class ProjetsComponent {
  constructor(public settingsService: SettingService) { }
}
