import { Component, OnInit } from '@angular/core';
import { patient } from '../model/patient.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { genre } from '../model/genre.model';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styles: []
})
export class UpdatePatientComponent implements OnInit{
  currentpatient=new patient();
  genres_medicaux!:genre[];
  updategenre_id!:number;
  constructor(private activatedRoute :ActivatedRoute,
    private router: Router,
    private patientService:PatientService){}
  
  ngOnInit(){
    this.genres_medicaux=this.patientService.listeGenreMedicaux();
    // console.log(this.route.snapshot.params.id);
  this.currentpatient=this.patientService.consulterPatient(this.activatedRoute.snapshot.params['cin']);
  this.updategenre_id=this.currentpatient.genre_medicaux.id_genres_medicaux;
  //console.log(this.currentpatient);
 
 
  }
  updatePatient()
{ //console.log(this.currentProduit);
  this.currentpatient.genre_medicaux=this.patientService.consulterGenreMedicaux(this.updategenre_id)
this.patientService.updatepatient(this.currentpatient);
this.router.navigate (['patient']);

}
}
