import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-exposition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exposition.component.html',
  styleUrl: './exposition.component.css'
})
export class ExpositionComponent {
  @Input() img: string="";
  @Input() title: string="Sans titre"
  @Input() legende: string="Bla bla bla..."

}
