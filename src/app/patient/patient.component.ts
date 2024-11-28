import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component,OnInit } from '@angular/core';
import { patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent implements OnInit{
  patients?: patient[]; // Déclarez patients comme un tableau de patient.
  constructor(private patientService :PatientService,
    public AuthService:AuthService,
    private router:Router,
  ){
    //this.patients = patientService.listePatient();
    
  }

  
  ngOnInit(): void {
      this.patientService.listePatient().subscribe(pats =>
      {        this.patients=pats;

        console.log(pats);
this.chargerPatients();
      }); 
    }
  
  chargerPatients(){
    this.patientService.listePatient().subscribe(pats => {
    console.log(pats);
    this.patients = pats;
    });
    }
   
    supprimerPatient(p:patient){
      //console.log(p);
      let conf = confirm("Etes-vous sûr ?");
        if (conf)
       this.patientService.supprimerPatient(p.idPatient).subscribe(()=>{
      console.log('produit supprimé ');
      this.chargerPatients();
      //this.router.navigate(['patients'])
      });
  
    }
    addPatient(patientData: patient): void {
      this.patientService.ajouterPatient(patientData).subscribe(
        (newPatient) => {
          console.log('Patient added:', newPatient);
          this.patients?.push(newPatient);
        },
        (error) => {
          console.error('Error adding patient:', error);
        }
      );
    }
}
