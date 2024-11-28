import { genre } from './genre.model';


export class genreWrapper {
  _embedded!: { genres: genre[] }; 
  
}