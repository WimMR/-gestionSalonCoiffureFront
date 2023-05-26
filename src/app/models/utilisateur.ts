import { Avis } from "./avis";

export class Utilisateur {
    idUtilisateur!:number;
    nomUtilisateur!:string;
    prenomUtilisateur!:string;
    username!:string;
    password!:string;
    dateNaissance!: string;
    avis!:Avis;
}
