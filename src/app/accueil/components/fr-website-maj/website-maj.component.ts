import { Component, OnInit } from '@angular/core';
import { MAJ } from '../../models/maj.model';

@Component({
  selector: 'fr-app-website-maj',
  templateUrl: './website-maj.component.html',
  styleUrl: './website-maj.component.css'
})
export class FRWebsiteMAJComponent implements OnInit {

  Majs = new Array<MAJ>();

  ngOnInit(){
    this.Majs = [
      {id: 1, date: "28/04/2024", titre: "Le site est en ligne !", image: "assets/MAJ1.png", description: "Youhou ! Tout le monde peut consulter les pages du site. Des petits ajustements sont encore à faire et seule la page d'accueil est faite, mais c'est un début ! La version pour téléphone est horrible. Je m'occuperai de la partie responsive un jour, c'est promis. "},
      {id: 2, date: "29/04/2024", titre: "La page des commandes et la galerie sont opérationnelles !", image: "assets/MAJ2.png", description: "La page des commandes est complète ! La galerie s'affiche correctement ! Les choses pourraient sans doute être mieux mais je suis contente du résultat actuel. C'est suffisant pour que je n'ai pas honte de montrer ce site web. La vue mobile a été améliorée également ! N'hésitez pas à me faire un retour !"},
      {id: 3, date: "01/05/2024", titre: "Le changement de langue est opérationnel ! ", image: "assets/MAJ3.png", description: "Les anglophones sont aussi de la partie de la fête maintenant... ou presque ! Le bouton pour changer de langue fonctionne mais je n'ai pas encore traduit les pages ! C'est en cours ! Joyeuses fêtes du travail à tous !  "},
      {id: 4, date: "15/08/2024", titre: "Réorganisation du site !", description: "Le code du site est cours de refonte ! J'en ai profité pour actualiser ma page de commande, au détriment de la galerie qui n'est plus fonctionnelle.", image:"assets/MAJ4.png"}
    ]
  }
}