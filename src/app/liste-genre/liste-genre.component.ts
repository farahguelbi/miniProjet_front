import { PatientService } from './../services/patient.service';
import { genreService } from './../services/genre.services';
import { UpdateGenresComponent } from './../update-genres/update-genres.component';
import { patient } from './../model/patient.model';
import { UpdatePatientComponent } from './../update-patient/update-patient.component';
import { genre } from './../model/genre.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-genre',
  templateUrl: './liste-genre.component.html',
  styles: ``
})
export class ListeGenreComponent implements OnInit{
  genres!: genre[];
  updatedGenre:genre={idGenre:0,nomGenre:""};
  ajout: boolean = true;
  currentId:number=0
  constructor(private genreService:genreService, 
    private PatientService:PatientService
  ){}
  ngOnInit(): void {
      this.chargerGenres();
      /*this.PatientService.listeGenres().subscribe(gen=>{
        this.genres=gen._embedded.genres;
        console.log(gen);
      });*/
  }
  chargerGenres() {
    /*this.genreService.listeGenre().subscribe(genres => {
      this.genres = genres;  
      console.log(this.genres);  
      if (this.genres.length > 0) {
        this.currentId = Math.max(...this.genres.map(genre => genre.idGenre));
      }
    });*/
    this.PatientService.listeGenres().subscribe(genre=>{
      this.genres=genre._embedded.genres;
      console.log(genre);
    }
    )
  }
  updateGenre(genre:genre){
    this.updatedGenre=genre;
    this.ajout=false;
  }
  genreUpdated(genre:genre){
    console.log("type updated event",genre);
this.PatientService.ajouterGenre(genre).subscribe(()=>this.chargerGenres());
    /*if (this.ajout) {
    
      this.currentId++;  
      genre.idGenre= this.currentId;  
      this.genres.push({ ...genre });
    } else {
      const index = this.genres.findIndex(t => t.idGenre === genre.idGenre);
      if (index !== -1) {
        this.genres[index] = { ...genre };  
      }
}*/
 }
chargerPatients(): void {
  /*// Récupérer les patients depuis le service
  this.patients = this.PatientService.listePatient();
  console.log(this.patients);*/
  this.PatientService.listeGenres().subscribe((gen)=>{
console.log(gen);
this.genres=gen._embedded.genres;
  }
  );
  console.log(this.genres);
}
ajouterGenre(nouveauGenre: genre): void {
  // Ajouter un genre médical
  this.PatientService.ajouterGenre(nouveauGenre);
  this.chargerGenres(); // Recharger les genres médicaux après ajout
}
ajouterPatient(nouveauPatient: patient): void {
  // Ajouter un patient
  this.PatientService.ajouterPatient(nouveauPatient);
  this.chargerPatients(); // Recharger la liste des patients après ajout
}
}
