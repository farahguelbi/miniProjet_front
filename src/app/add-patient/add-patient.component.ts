import { Component,OnInit} from '@angular/core';
import { patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import { genre } from '../model/genre.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from '../model/user.model';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent implements OnInit {
  
  newPatient = new patient();
  genres_medicaux! : genre[];
  newid_genres_medicaux!: number;
    newgenre!:genre;
    myForm!:FormGroup;
    public user =new user()
 constructor( private patientService :PatientService,
  private router:Router,
  private formBuilder:FormBuilder,
){}
  
 
  ngOnInit(): void {
    this.genres_medicaux= this.patientService.listeGenreMedicaux();
    this.myForm =this.formBuilder.group({
      email :['',[Validators.required,Validators.email]]
    });
      
  }
  addPatient(){
    //console.log(this.newPatient);
    this.patientService.ajouterPatient(this.newPatient);
  this.newgenre=this.patientService.consulterGenreMedicaux(this.newid_genres_medicaux);
  this.newPatient.genre_medicaux=this.newgenre;
  this.router.navigate(['patient'])
  }
}
