import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit{

titre: string = "Apprendre le databinding dans Angular 10"
status : boolean=true
nom: string = "Ayoub Ayari"
ngOnInit(): void {
}
changerTitre(){
  this.titre="Mon nouveau titre"
}
}
