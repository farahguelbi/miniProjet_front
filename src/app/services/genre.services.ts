import { genre } from './../model/genre.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class genreService {

  // Tableau local des types de cuisine avec leurs sous-catégories
  private genres: genre[] = [
    { idGenre:1, nomGenre: "Pédiatrie"},
    { idGenre: 2, nomGenre: "Adultes"},
    { idGenre: 3, nomGenre: "Gériatrie"},
    { idGenre: 4, nomGenre: "Femmes enceintes	"},
    { idGenre: 5, nomGenre: "Néonatologie"},
    { idGenre: 6, nomGenre: "uregences"},

    { idGenre: 7, nomGenre: "Chirurgie	"},
    { idGenre: 8, nomGenre: "Maladies chroniques	"},
    { idGenre: 9, nomGenre: "Maladies infectieuses	"},

    { idGenre: 10, nomGenre: "Réhabilitation"},
    { idGenre: 11, nomGenre: "Oncologie"},
    { idGenre: 12, nomGenre: "Psychiatrie"},
    { idGenre: 13, nomGenre: "Cardiologie"},
    { idGenre: 14, nomGenre: "Orthopédie"},
    { idGenre: 15, nomGenre: "Neurologie	"},
    { idGenre: 16, nomGenre: "Dermatologie"},
    { idGenre: 17, nomGenre: "Endocrinologie"},
    { idGenre: 18, nomGenre: "Pneumologie	"},
    { idGenre: 19, nomGenre: "Néphrologie"},
    { idGenre: 20, nomGenre: "Gynécologie"},
  ];

  constructor() { }

  // Méthode pour récupérer la liste des genres sous forme d'Observable
  listeGenre(): Observable<genre[]> {
    return of(this.genres); // Transforme le tableau en Observable
  }
}