import { Injectable } from '@angular/core';
import { patient } from '../model/patient.model';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients!: patient[]; // 'patients' should be an array

  patient! : patient;

  constructor( private activatedRoute :ActivatedRoute,
    private router: Router,
  ) {
    this.patients=[
      { CIN_de_patient: 12345667,
        nom_depatient: "Guelbi",
        prenom_de_patient: "FARAH",
        adresse:"Rue Taieb Mhiri Korba 8070",
        dateDeRendez_vous: new Date("01/14/2024"),
        dateDeNaissance: new Date("01/14/2004"),
      },
      { CIN_de_patient: 12347765,
        nom_depatient: "Bani",
        prenom_de_patient: "amira",
        adresse:"Avenue Mohamed V Nabeul 8000",
        dateDeRendez_vous: new Date("01/14/2024"),
        dateDeNaissance: new Date("01/14/1999"),
      },
      { CIN_de_patient: 12343556,
        nom_depatient: "telmoudi",
        prenom_de_patient: "hager",

        adresse:"Avenue de Carthage",
        dateDeRendez_vous: new Date("01/14/2023"),
        dateDeNaissance: new Date("01/14/2001"),
      }
        
    ];
   }
   listePatient():patient[]{
    return this.patients;
   }
   ajouterPatient(pat:patient){
    this.patients.push(pat);
    this.router.navigate (['patient']);

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

