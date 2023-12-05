import { Component, OnInit } from '@angular/core';
import { Ingenieur } from '../model/ingenieur.model';
import { IngenieurService } from '../services/ingenieur.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Projet } from '../model/projet.model';
import { Image } from '../model/Image.model';


@Component({
  selector: 'app-add-ingenieur',
  templateUrl: './add-ingenieur.component.html',
  styleUrls: ['./add-ingenieur.component.css']
})
export class AddIngenieurComponent implements OnInit {
  projets! : Projet[];
newIdProj! : number;
newProjet! : Projet;
uploadedImage!: File; 
  imagePath: any; 
Ingenieur!:Ingenieur;
  newIngenieur = new Ingenieur();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
      
    private ingenieurService : IngenieurService){}
  ngOnInit(): void {
    this.ingenieurService.listeProjets().
subscribe(cats => {console.log(cats);
  this.projets=cats._embedded.projets;
});
  }

  addIngenieur(){
    this.ingenieurService.ajouterIngenieur(this.newIngenieur)
      .subscribe((addedingenieur: Ingenieur) => {
        // Step 2: Upload the image
        this.ingenieurService.uploadImageProd(this.uploadedImage, this.uploadedImage.name , addedingenieur.idIngenieur!)
          .subscribe((img: Image) => {
            // Step 3: Associate the image with the new plat
            addedingenieur.projet = this.projets.find(cat => cat.idProj == this.newIdProj)!;
            img.PRODUIT_ID = addedingenieur.idIngenieur!;
            console.log(addedingenieur.idIngenieur)
            console.log(img.PRODUIT_ID); // Assuming idPlat is the ID property of Plat
            addedingenieur.image = img;
  
          
            this.ingenieurService.updateIngenieur(addedingenieur)
              .subscribe(() => {
                this.router.navigate(['ingenieurs']);
              });
          });
      });
}
onImageUpload(event: any) { 
  this.uploadedImage = event.target.files[0]; 
   
  var reader = new FileReader(); 
  reader.readAsDataURL(this.uploadedImage); 
  reader.onload = (_event) => {  this.imagePath = reader.result;    } 
}
}
