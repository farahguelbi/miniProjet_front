import { Component,OnInit } from '@angular/core';
import { patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent implements OnInit{


  patients :patient[];
  constructor(private patientService :PatientService,
    
  ){
    this.patients = patientService.listePatient();
    
  }
  supprimerPatient(p:patient){
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
      if (conf)
     this.patientService.supprimerPatient(p);

  }
  ngOnInit(): void {
      
  }

}
