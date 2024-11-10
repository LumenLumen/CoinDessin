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
      {id: 4, date: "15/08/2024", titre: "Réorganisation du site !", description: "Le code du site est cours de refonte ! J'en ai profité pour actualiser ma page de commande, au détriment de la galerie qui n'est plus fonctionnelle.", image:"assets/MAJ4.png"},
      {id: 5, date: "20/10/2024", titre: "Retour de la galerie", description: "La galerie fait son retour avec plein de dessins ! Il ne manque que ceux de 2024 que je compte ajouter prochainement. Si vous êtes sur écran tactile, je vous invite à taper gentiment en bas de chaque image de la galerie.", image:"assets/MAJ5.png"},
      {id: 6, date: "26/10/2024", titre: "Ajout des projets", description: "Votre attention s'il vous plait, l'onglet des projets est fonctionnel !! Je le remplirai au fur et à mesure quand finalement, le plus long, ce n'est pas de coder... c'est de produire le contenu.", image:"assets/MAJ6.png"},
      {id: 7, date: "10/11/2024", titre: "Inktober + Charity Comm", description: "Tous les dessins faits pour l'Inktober ont été mis en ligne ! N'hésitez pas à y jeter un coup d'œil ! J'ai également créer le projet pour les commandes caritatives ! Bref, surtout de l'ajout de contenu.", image:"assets/MAJ7.png"}
    ]
  }
}