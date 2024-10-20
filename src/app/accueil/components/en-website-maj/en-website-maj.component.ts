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
      {id: 1, date: "01/05/2024", titre: "I didn't forget you, dear English-speaker", image: "assets/MAJ3.png", description: "I'm slowly translating this website. If you see any language mistakes, please let me know ! That would help a lot ! Happy May the 1st !"},
      {id: 2, date: "15/08/2024", titre: "Web site changes !", description: "I'm reorganizing the code of the web site ! I updated my commission page in the same time :)", image:"assets/MAJ4.png"},
      {id: 3, date: "20/10/2024", titre: "The gallery is back !", description: "The gallery is back with plenty of drawings ! Unfortunately, I don't plan to translate it at the moment, but you can still enjoy the artworks ! If you have a touch-screen, feel free to gently hit the bottom of each pictures of the gallery ! I think about showing the full screen picture in a few updates.", image:"assets/MAJ5.png"}
    ]
  }
}
