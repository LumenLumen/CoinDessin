import { Component } from '@angular/core';
import { MAJ } from '../../models/maj.model';

@Component({
  selector: 'app-en-website-maj',
  templateUrl: './en-website-maj.component.html',
  styleUrl: './en-website-maj.component.css'
})
export class EnWebsiteMAJComponent {
  Majs = new Array<MAJ>();

  ngOnInit(){
    this.Majs = [
      {id: 1, date: "01/05/2024", titre: "I didn't forget you, dear English-speaker", image: "/assets/MAJ3.png", description: "I'm slowly translating this website. If you see any language mistakes, please let me know ! That would help a lot ! Happy May the 1st !"},
    ]
  }
}
