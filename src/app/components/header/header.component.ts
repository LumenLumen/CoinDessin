import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { LanguagebuttonComponent } from '../languagebutton/languagebutton.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent, LanguagebuttonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

}
