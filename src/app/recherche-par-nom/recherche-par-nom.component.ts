import { Component, OnInit } from '@angular/core';
import { patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent implements OnInit {
  nomPatient! :string;
  patients!:patient[];
  allPatients!:patient[];
  searchTerm!: string;

  constructor(private patientService:PatientService){}
ngOnInit(): void {  
   this.patients=this.patientService.listePatient() ;
   this.allPatients=this.patients;
   
  }    
  
  onKeyUp(filterText : string){
    this.patients = this.allPatients.filter(item =>
    item.nom_depatient.toLowerCase().includes(filterText.toLowerCase()));
    }
}    