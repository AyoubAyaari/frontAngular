import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IngenieurService } from '../services/ingenieur.service';
import { Ingenieur } from '../model/ingenieur.model';
import { Projet } from '../model/projet.model';
import { Image } from '../model/Image.model';

@Component({
  selector: 'app-update-ingenieur',
  templateUrl: './update-ingenieur.component.html',
  styles: []
})
export class UpdateIngenieurComponent implements OnInit {
  
  currentIngenieur = new Ingenieur();
  projets! : Projet[];
updatedProjId! : number;
myImage! : string;
uploadedImage!: File; 
isImageUpdated: Boolean=false;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private ingenieurService: IngenieurService) { }
    


  ngOnInit(): void {
    this.ingenieurService.listeProjets().
subscribe(cats => {console.log(cats);
  this.projets=cats._embedded.projets;
});
this.ingenieurService.consulterIngenieur(this.activatedRoute.snapshot.params['id'])
.subscribe( prod =>{ this.currentIngenieur = prod; 
       this.updatedProjId =   prod.projet.idProj; 
   } ) ; 
  }


  
  updateIngenieur()
{
  this.currentIngenieur.projet = this.projets.find(cat => cat.idProj == this.updatedProjId)!;
           
  this.ingenieurService 
            .updateIngenieur(this.currentIngenieur) 
            .subscribe((prod) => { 
              this.router.navigate(['ingenieurs']); 
            });
}

onImageUpload(event: any) { 
  if(event.target.files && event.target.files.length) { 
    this.uploadedImage = event.target.files[0]; 
     this.isImageUpdated =true; 
    const reader = new FileReader(); 
    reader.readAsDataURL(this.uploadedImage); 
    reader.onload = () => { this.myImage = reader.result as string;  }; 
  } 
} 
onAddImageProduit() { 
  this.ingenieurService 
  .uploadImageProd(this.uploadedImage, 
this.uploadedImage.name,this.currentIngenieur.idIngenieur) 
  .subscribe( (img : Image)  => { 
          this.currentIngenieur.images.push(img); 
          }); 
 } 

 supprimerImage(img: Image){ 
  let conf = confirm("Etes-vous sûr ?"); 
  if (conf) 
     this.ingenieurService.supprimerImage(img.idImage).subscribe(() => { 
        //supprimer image du tableau currentProduit.images     
        const index = this.currentIngenieur.images.indexOf(img, 0); 
        if (index > -1) { 
          this.currentIngenieur.images.splice(index, 1); 
        } 
   }); 
 } 

}
