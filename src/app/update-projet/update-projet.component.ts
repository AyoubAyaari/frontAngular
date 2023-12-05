import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Projet } from '../model/projet.model';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css']
})

export class UpdateProjetComponent implements OnInit{
  @Input()
  projets! : Projet;
  @Input()
  ajout! : boolean;

  @Output() 
projetUpdated = new EventEmitter<Projet>()
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateProjet ",this.projets);
  }
  saveProjet(){
    this.projetUpdated.emit(this.projets);
    }
 
}
