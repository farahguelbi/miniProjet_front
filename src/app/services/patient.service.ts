import { Injectable } from '@angular/core';
import { patient } from '../model/patient.model';
import { ActivatedRoute, Router } from '@angular/router';
import { genre } from '../model/genre.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients!: patient[]; // 'patients' should be an array
  patient! : patient;
genres_medicaux:genre[];
patientsRecherche!:patient[];
  constructor( private activatedRoute :ActivatedRoute,
    private router: Router,
  ) {
    this.genres_medicaux=[
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
      
    ]
    this.patients=[
      
        {
          CIN_de_patient: 12345667,
          nom_depatient: "Guelbi",
          prenom_de_patient: "FARAH",
          adresse: "avenue hbib bourghiba  Korba 8070",
          dateDeRendez_vous: new Date("01/14/2024"),
          dateDeNaissance: new Date("01/14/2004"),
          genre_medicaux: {id_genres_medicaux: 6, nom_de_categorie:"uregences"},
          ville: "Korba",
        },
      {
        CIN_de_patient: 12347765,
        nom_depatient: "Bani",
        prenom_de_patient: "amira",
        adresse: "Avenue Hédi Nouira 8000",
        dateDeRendez_vous: new Date("01/14/2024"),
        dateDeNaissance: new Date("01/14/1999"),
        ville: 'Tunis',

        genre_medicaux: {id_genres_medicaux: 8, nom_de_categorie: "Maladies chroniques	"},

      },
      {
        CIN_de_patient: 12343556,
        nom_depatient: "telmoudi",
        prenom_de_patient: "hager",

        adresse: "Avenue de Carthage",
        dateDeRendez_vous: new Date("01/14/2023"),
        dateDeNaissance: new Date("01/14/2001"),
        ville: 'tunis',
        genre_medicaux: {id_genres_medicaux: 4,  nom_de_categorie: "Femmes enceintes	"},

      }
        
    ];
   }
   listeGenreMedicaux():genre[]{
    return this.genres_medicaux;
   }
   consulterGenreMedicaux(id:number):genre{
    return this.genres_medicaux.find(genres=>genres.id_genres_medicaux==id)!;
   }
   rechercherParGenreMedicaux(idGenre: number): patient[]{
    this.patientsRecherche = [];
    this.patients.forEach((cur, index) => {
    if(idGenre == cur.genre_medicaux.id_genres_medicaux) {
    console.log("cur "+cur);
    this.patientsRecherche.push(cur);
    }
    });
    return this.patientsRecherche;
    } 

   listePatient():patient[]{
    return this.patients;
   }
   ajouterPatient(pat:patient){
    this.patients.push(pat);

   }
   supprimerPatient(p: patient)
{
  //supprimer le patient p du tableau patients
const index =this.patients.findIndex(patient => patient.CIN_de_patient === p.CIN_de_patient);
if(index!==-1){
  this.patients.splice(index,1);
}/* this.patients.forEach((cur, index) => {
if(p.idpatient === cur.idpatient) {
this.patient.splice(index, 1);
}
}); */
}
consulterPatient(CIN:number):patient{
this.patient=this.patients.find(p=>p.CIN_de_patient==CIN)!;
  return this.patient;
  
}
trierPatients(){
  this.patients = this.patients.sort((n1,n2) => {
  if (n1.CIN_de_patient! > n2.CIN_de_patient!) {
  return 1;
  }
  if (n1.CIN_de_patient! < n2.CIN_de_patient!) {
  return -1;
  }
  return 0;
  });
  }

 updatepatient(p:patient){
  //console.log(p);
  this.supprimerPatient(p);
  this.ajouterPatient(p);
  this.trierPatients();
}


}

