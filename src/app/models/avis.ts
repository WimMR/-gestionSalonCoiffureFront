import { Utilisateur } from "./utilsateur";
export class Avis {
    idAvis!:number;
    titre!:string;
    description!:string;
    utilsateur!:Utilisateur[];
}
