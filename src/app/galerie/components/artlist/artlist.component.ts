import { Component, Input, OnInit } from '@angular/core';
import { ART2020 } from '../../models/2020-mock';
import { ART2021 } from '../../models/2021-mock';
import { ART2022 } from '../../models/2022-mock';
import { SmallImg } from '../../models/small-img.model';

@Component({
  selector: 'app-artlist',
  templateUrl: './artlist.component.html',
  styleUrl: './artlist.component.css'
})
export class ArtlistComponent implements OnInit{

  @Input() annee !: string;

  listeFiles = new Array<String>();

  nb_art = 0 ;
  art_desc = new Array<SmallImg> ;

  ngOnInit(): void{
    if (this.annee == "2020"){
      this.nb_art = 24 ;
      this.art_desc = ART2020 ;
    }
    else if (this.annee == "2021"){
      this.nb_art = 58 ;
      this.art_desc = ART2021 ;
    }
    else if (this.annee == "2022"){
      this.nb_art = 29 ;
      this.art_desc = ART2022 ;
    }
    this.listeFichier();
  }

  listeFichier(){
    var i ;
    for (i = 1 ; i < this.nb_art + 1 ; i++){
      this.listeFiles.push("assets/Galerie/".concat(this.annee, "/", i.toString(), ".png")) 
    }
  }
}
