import { Component,OnInit } from '@angular/core';
import { patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import { genre } from '../model/genre.model';

@Component({
  selector: 'app-recherche-par-genre-medicaux',
  templateUrl: './recherche-par-genre-medicaux.component.html',
  styles: ``
})
export class RechercheParGenreMedicauxComponent implements OnInit {

patients!:patient[];
idGenre!:number;
genres_medicaux!:genre[];
supprimerPatient: any;
constructor( private patientService:PatientService){}
ngOnInit(): void {
  this.genres_medicaux=this.patientService.listeGenreMedicaux();
    this.patients= [];
}
onChange(){
  console.log(this.idGenre);
  this.patients=this.patientService.rechercherParGenreMedicaux(this.idGenre);
}
}
