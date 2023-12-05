import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';
import { IngenieurService } from '../services/ingenieur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-projet',
  templateUrl: './liste-projet.component.html',
  styleUrls: ['./liste-projet.component.css']
})
export class ListeProjetComponent implements OnInit {
  projets! : Projet[];
  updatedproj:Projet = {"idProj":0,"nomProj":""};
  ajout:boolean=true;
  constructor(private ingenieuService : IngenieurService,private router :Router) { }

  ngOnInit(): void {
    this.ingenieuService.listeProjets().
    subscribe(cats => {this.projets = cats._embedded.projets;
    console.log(cats);
    }); 
  }
  projetUpdated(cat:Projet){
    console.log("Cat updated event",cat);
    this.ingenieuService.ajouterProjet(cat).
     subscribe( ()=> this.chargerProjet());
    }
    chargerProjet(){
      this.ingenieuService.listeProjets().
      subscribe(cats => {this.projets = cats._embedded.projets;
      console.log(cats);
      });
      }
      updateCat(cat:Projet) {
        this.updatedproj=cat;
        this.ajout=false; 
        }
      
    

}
