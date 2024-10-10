import { Component,OnInit} from '@angular/core';
import { patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent implements OnInit {
  
  newPatient = new patient();
  constructor( private patientService :PatientService){}
  
  addPatient(){
    //console.log(this.newPatient);
    this.patientService.ajouterPatient(this.newPatient);
  }
  ngOnInit(): void {
      
  }

}
