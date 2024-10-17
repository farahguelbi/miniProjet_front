import { Address } from "node:cluster";
import { genre } from "./genre.model";

export class patient{
    CIN_de_patient!: number;
    nom_depatient!: string;
    prenom_de_patient!: string;
    dateDeNaissance!:  Date ;
    dateDeRendez_vous !:  Date ;
    ville!:string;
    adresse!:string;
    genre_medicaux!:genre

}