import { Component, OnInit } from '@angular/core';
import { IngenieurService } from '../services/ingenieur.service';
import { Ingenieur } from '../model/ingenieur.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit{
  nomProj!:string;
  ingenieurs!:Ingenieur[];
  allIngenieurs! : Ingenieur[];
searchTerm!: string;

constructor(private ingenieurService : IngenieurService){}

  ngOnInit(): void {
    this.ingenieurService.listeIngenieurs().subscribe(prods => {
      console.log(prods);
      this.ingenieurs = prods;
      });
      
  }


  rechercherProds(){
    this.ingenieurService.rechercherParNom(this.nomProj).
    subscribe(prods => {
    this.ingenieurs = prods; 
    console.log(prods)});
    }

   // onKeyUp(filterText : string){
     // this.ingenieurs = this.allIngenieurs.filter(item =>
     // item.nomIngenieur.toLowerCase().includes(filterText));
      //}
      

}
