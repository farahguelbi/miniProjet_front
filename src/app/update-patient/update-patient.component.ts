import { Component, OnInit } from '@angular/core';
import { patient } from '../model/patient.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { genre } from '../model/genre.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from '../model/user.model';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styles: []
})
export class UpdatePatientComponent implements OnInit{
  currentpatient=new patient();
  genres_medicaux!:genre[];
  updategenre_id!:number;
  confirmPassword?:string;
  id_genres_medicaux!:number;
  myForm!:FormGroup;
  public user =new user()
  constructor(private activatedRoute :ActivatedRoute,
    private formBuilder:FormBuilder,
    private router: Router,
    private patientService:PatientService){}
  
  ngOnInit(){
    this.patientService.listeGenres().subscribe(genre=>{this.genres_medicaux=genre._embedded.genres;
      console.log(genre);
    });
    this.patientService.consulterPatient(this.activatedRoute.snapshot.params['id']).subscribe(pats=>{
      this.currentpatient=pats;
     this.currentpatient.genre.idGenre=this.currentpatient.genre?.idGenre!;
    });

   /*this.genres_medicaux=this.patientService.listeGenreMedicaux();
    // console.log(this.route.snapshot.params.id);
  this.currentpatient=this.patientService.consulterPatient(this.activatedRoute.snapshot.params['cin']);
  this.updategenre_id=this.currentpatient.genre_medicaux.id_genres_medicaux;
  //console.log(this.currentpatient);
  this.myForm =this.formBuilder.group({
    nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', [Validators.required, Validators.minLength(3)]],
      cin: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      adresse: ['', Validators.required],
      ville: ['', Validators.required],
      dateDeRendezVous: ['', Validators.required],
      genreMedecin: ['', Validators.required]
      //email :['',[Validators.required,Validators.email]]*/
    //});

 
 
  }
  updatePatient()
{ //console.log(this.currentProduit);
  this.currentpatient.genre=this.genres_medicaux.find(gen=>gen.idGenre==this.updategenre_id)!;
  this.patientService.updatePatient(this.currentpatient).subscribe(pats =>{
    this.router.navigate (['patient']); })




}
OnRegister(){
  console.log(this.user);
}
}
