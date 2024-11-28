import { genre } from './../model/genre.model';
import { Component, EventEmitter, Input, OnInit, output, Output } from '@angular/core';

@Component({
  selector: 'app-update-genres',
  templateUrl: './update-genres.component.html',
  styles: ``
})
export class UpdateGenresComponent implements OnInit {
  @Input()
  genre!:genre;
  @Input()
  ajout!:boolean;
  @Output()
  genreUpdated=new EventEmitter<genre>();
  constructor(){}
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateGenre ",this.genre);

  }
  saveGenre(){
    this.genreUpdated.emit(this.genre);
  }
  modeAjout(){
    this.ajout=true;
    this.genre.idGenre=0;
    this.genre.nomGenre="";
  }

}
