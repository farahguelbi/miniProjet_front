import { genre} from './../model/genre.model';
import { Component,OnInit} from '@angular/core';
import { patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from '../model/user.model';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',

})
export class AddPatientComponent implements OnInit {
  
  newPatient = new patient();
  
  genres_medicaux!: genre[];
  newid_genres_medicaux!: number;
    newgenre!:genre;
    myForm!:FormGroup;
    public user =new user()
 constructor( private patientService :PatientService,
  private router:Router,
  private formBuilder:FormBuilder,
){}
  
 
  ngOnInit(): void {
  /* // this.genres_medicaux= this.patientService.listeGenreMedicaux();
    this.myForm =this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', [Validators.required, Validators.minLength(3)]],
      id: ['', Validators.required],
      adresse: ['', Validators.required],
      ville: ['', Validators.required],
      dateDeRendezVous: ['', Validators.required],
      genreMedecin: ['', Validators.required]
      //email :['',[Validators.required,Validators.email]]
      
    })
   */ 
   this.patientService.listeGenres().subscribe(gen=>{
    console.log(gen);
    this.genres_medicaux=gen._embedded.genres;
   
    });

  }
  addPatient(){
    //console.log(this.newPatient);
   

      this.newPatient.genre=this.genres_medicaux.find(genre=>genre.idGenre==this.newid_genres_medicaux)!;
      this.patientService.ajouterPatient(this.newPatient)
      .subscribe(pats=> {
      console.log(pats);
      this.router.navigate(['patient'])
    });
      }
      
  }

