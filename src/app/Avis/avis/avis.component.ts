import { Component, OnInit } from '@angular/core';
import { Avis } from 'src/app/models/avis';
import { AvisService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent  implements OnInit{
  // Déclaration d'un tableau d'utilisateurs
  // ! : le tableau n'est pas initialisé
  avis!:any[]; // any : n'importe quel type de données
  avi:Avis=new Avis();
  // DI : par constructeur  
  constructor(private avisService:AvisService){
  }
  ngOnInit(): void {
    this.findAllAvis();
  }
  findAllAvis(){
    // data : les données qui se trouvent dans le cache du navigateur
    this.avisService.findAll().subscribe(data => {this.avis = data});
  }
  saveAvi(){
    this.avisService.save(this.avi).subscribe(
      () => {
        // MAJ la liste des utilisateurs
        this.findAllAvis();
        // Vider le formulaire
        this.avi = new Avis();
      }
    )
  }
  deleteAvi(id:number){
    this.avisService.delete(id).subscribe(
      () => {
        this.findAllAvis();
      }
    )
  }
}
