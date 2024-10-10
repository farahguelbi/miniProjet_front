import { Component, OnInit } from '@angular/core';
import { patient } from '../model/patient.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styles: []
})
export class UpdatePatientComponent implements OnInit{
  currentpatient=new patient();
  constructor(private activatedRoute :ActivatedRoute,
    private router: Router,
    private patientService:PatientService){}
  
  ngOnInit(){
    // console.log(this.route.snapshot.params.id);
  this.currentpatient=this.patientService.consulterPatient(this.activatedRoute.snapshot.params['cin']);
  console.log(this.currentpatient);
 
 
  }
  updatePatient()
{ //console.log(this.currentProduit);
this.patientService.updatepatient(this.currentpatient);
this.router.navigate (['patient']);

}
}
