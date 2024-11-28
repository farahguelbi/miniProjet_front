import { genre } from './../model/genre.model';
import { Injectable } from '@angular/core';
import { patient } from '../model/patient.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { genreWrapper } from '../model/GenreWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  apiURL= 'http://localhost:5000/patients/api';
    apiURLGen: string ='http://localhost:5000/patients/genre'
  patients!: patient[]; // 'patients' should be an array
  patient! : patient;
//genres_medicaux:genre[];
//patientsRecherche!:patient[];


  constructor( //private activatedRoute :ActivatedRoute,
    //private router: Router,
    private http:HttpClient
  ) {
    /*this.genres_medicaux=[
      { id_genres_medicaux:1, nom_de_categorie: "Pédiatrie"},
      { id_genres_medicaux: 2, nom_de_categorie: "Adultes"},
      { id_genres_medicaux: 3, nom_de_categorie: "Gériatrie"},
      { id_genres_medicaux: 4, nom_de_categorie: "Femmes enceintes	"},
      { id_genres_medicaux: 5, nom_de_categorie: "Néonatologie"},
      { id_genres_medicaux: 6, nom_de_categorie: "uregences"},

      { id_genres_medicaux: 7, nom_de_categorie: "Chirurgie	"},
      { id_genres_medicaux: 8, nom_de_categorie: "Maladies chroniques	"},
      { id_genres_medicaux: 9, nom_de_categorie: "Maladies infectieuses	"},

      { id_genres_medicaux: 10, nom_de_categorie: "Réhabilitation"},
      { id_genres_medicaux: 11, nom_de_categorie: "Oncologie"},
      { id_genres_medicaux: 12, nom_de_categorie: "Psychiatrie"},
      { id_genres_medicaux: 13, nom_de_categorie: "Cardiologie"},
      { id_genres_medicaux: 14, nom_de_categorie: "Orthopédie"},
      { id_genres_medicaux: 15, nom_de_categorie: "Neurologie	"},
      { id_genres_medicaux: 16, nom_de_categorie: "Dermatologie"},
      { id_genres_medicaux: 17, nom_de_categorie: "Endocrinologie"},
      { id_genres_medicaux: 18, nom_de_categorie: "Pneumologie	"},
      { id_genres_medicaux: 19, nom_de_categorie: "Néphrologie"},
      { id_genres_medicaux: 20, nom_de_categorie: "Gynécologie"},
      
    ]*/
   /* this.patients=[
      
        {
          id_de_patient: 1,
          nom_depatient: "Guelbi",
          prenom_de_patient: "FARAH",
          adresse: "avenue hbib bourghiba  Korba 8070",
          dateDeRendez_vous: new Date("01/14/2024"),
         // dateDeNaissance: new Date("01/14/2004"),
          genre_medicaux: {id_genres_medicaux: 6, nom_de_categorie:"uregences"},
          ville: "Korba",
        },
      {
        id_de_patient: 2,
        nom_depatient: "Bani",
        prenom_de_patient: "amira",
        adresse: "Avenue Hédi Nouira 8000",
        dateDeRendez_vous: new Date("01/14/2024"),
        //dateDeNaissance: new Date("01/14/1999"),

        genre_medicaux: {id_genres_medicaux: 8, nom_de_categorie: "Maladies chroniques	"},
        ville: 'Tunis',

      },
      {
        id_de_patient: 3,
        nom_depatient: "telmoudi",
        prenom_de_patient: "hager",

        adresse: "Avenue de Carthage",
        dateDeRendez_vous: new Date("01/14/2023"),
        //dateDeNaissance: new Date("01/14/2001"),
        genre_medicaux: {id_genres_medicaux: 4,  nom_de_categorie: "Femmes enceintes	"},
        ville: 'tunis',

      }
        
    ];*/
   }
  
   listeGenres():Observable<genreWrapper>{
    return this.http.get<genreWrapper>(this.apiURLGen);
    }
    listePatient(): Observable<patient[]> {
      return this.http.get<patient[]>(this.apiURL); // Expect JSON response
  }
  
  getPatients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }
  ajouterPatient( pats: patient):Observable<patient>{
    return this.http.post<patient>(this.apiURL, pats, httpOptions);
    }
    supprimerPatient(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      rechercherParGenre(id: number):Observable< patient[]> {
        const url = `${this.apiURL}/patsgen/${id}`;
          return this.http.get<patient[]>(url);
        }
        rechercherParNom(nom: string):Observable< patient[]> {
          const url = `${this.apiURL}/patsByName/${nom}`;
          return this.http.get<patient[]>(url);
          }
      
  /*      listeGenres():Observable<genreWrapper>{
          return this.http.get<genreWrapper>(this.apiURLGen);
       
         }
*/
consulterPatient(id: number): Observable<patient> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<patient>(url);
  }
trierPatients(){
  this.patients = this.patients.sort((n1,n2) => {
  if (n1.idPatient! > n2.idPatient!) {
  return 1;
  }
  if (n1.idPatient! < n2.idPatient!) {
  return -1;
  }
  return 0;
  });
  }

 updatePatient(pats:patient):Observable<patient>{
 return this.http.put<patient>(this.apiURL,pats,httpOptions);
}

ajouterGenre(genre: genre):Observable<genre>{
  return this.http.post<genre>(this.apiURLGen,genre,httpOptions);
}
/*ajouterGenre(genre: genre): genre {
  const newId =
    this.genres_medicaux.length > 0
      ? Math.max(...this.genres_medicaux.map((gen) => gen.id_genres_medicaux ?? 0)) + 1
      : 1;
  genre.id_genres_medicaux = newId;
  this.genres_medicaux.push(genre);
  return genre;
}*/
/*ajouterGenre(genre:genre):Observable<genre>{
  this.genres_medicaux.push(genre);
  return new Observable(observer =>{
    observer.next(genre);
    observer.complete();
  });*/
  
}


