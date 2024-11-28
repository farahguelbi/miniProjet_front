import { Address } from "node:cluster";
import { genre } from "./genre.model";

export class patient{
    idPatient!: number;
    nomPatient!: string;
    prenomPatient!: string;
   // dateDeNaissance!:  Date ;
   dateRendezvous !:  Date ;
   // ville!:string;
    adresse!:string;
    genre!:genre

}