import { Utilisateur } from "./utilisateur";
export class Avis {
    idAvis!:number;
    titre!:string;
    description!:string;
    utilsateur!:Utilisateur[];
}
