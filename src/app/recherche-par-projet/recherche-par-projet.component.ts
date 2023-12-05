import { Component, OnInit } from '@angular/core';
import { Ingenieur } from '../model/ingenieur.model';
import { Projet } from '../model/projet.model';
import { IngenieurService } from '../services/ingenieur.service';

@Component({
  selector: 'app-recherche-par-projet',
  templateUrl: './recherche-par-projet.component.html',
  styleUrls: ['./recherche-par-projet.component.css']
})
export class RechercheParProjetComponent implements OnInit {
  ingenieurs! : Ingenieur[];
IdProjet! : number;
projets! : Projet[];
constructor(private ingenieurService:IngenieurService){}

  ngOnInit(): void {
    this.ingenieurService.listeProjets().
    subscribe(cats => {this.projets = cats._embedded.projets;
    console.log(cats);
    });
    
  }
  onChange() {
    this.ingenieurService.rechercherParProjet(this.IdProjet).
    subscribe(prods =>{this.ingenieurs=prods});
    }
    

}
