import { Injectable } from '@angular/core';
import { Ingenieur } from '../model/ingenieur.model';
import { Projet } from '../model/projet.model';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProjetWrapper } from '../model/ProjetWrapper.model';
import { AuthService } from './auth.service';
import { Image } from '../model/Image.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class IngenieurService {
  apiURL: string = 'http://localhost:8081/miniprojet/api';
  apiURLProj: string = 'http://localhost:8081/miniprojet/proj';
  ingenieurs !: Ingenieur[];
  ingenieur! : Ingenieur;
  //Image!:Image;
  projets! : Projet[];

  constructor(private http : HttpClient ,private authService: AuthService) {
    
    /*this.projets = [ {idProj : 1, nomProj : "usine"},
{idProj : 2, nomProj : "clinique"},
{idProj : 3, nomProj : "iset"}]; 
    this.ingenieurs = [
      { idIngenieur : 1, nomIngenieur : "Ayoub", Expertise : "3 ans", projet : {idProj : 1, nomProj : "usine"}},
      { idIngenieur : 2, nomIngenieur : "Azer", Expertise : "3 ans",projet : {idProj : 2, nomProj : "clinique"}},
      { idIngenieur : 3, nomIngenieur :"Israa", Expertise : "1ans",projet : {idProj : 1, nomProj : "iset"}}
      ];
      */
   }
   listeIngenieurs():Observable<Ingenieur[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
return this.http.get<Ingenieur[]>(this.apiURL+"/all",{headers:httpHeaders})

;


    }
    
    ajouterIngenieur( ing: Ingenieur):Observable<Ingenieur>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
      return this.http.post<Ingenieur>(this.apiURL+"/addprod", ing, {headers:httpHeaders});
      }
      supprimerIngenieur(id : number){
        const url = `${this.apiURL}/delprod/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
        return this.http.delete(url,  {headers:httpHeaders});
        }
        //ou Bien
        /* this.produits.forEach((cur, index) => {
        if(prod.idProduit === cur.idProduit) {
        this.produits.splice(index, 1);
        }
        }); */
        
        consulterIngenieur(id:number): Observable<Ingenieur>{
          const url = `${this.apiURL}/getbyid/${id}`;
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
          return this.http.get<Ingenieur>(url,{headers:httpHeaders});

          }

          trierIngenieurs(){
            this.ingenieurs = this.ingenieurs.sort((n1,n2) => {
            if (n1.idIngenieur! > n2.idIngenieur!) {
            return 1;
            }
            if (n1.idIngenieur! < n2.idIngenieur!) {
            return -1;
            }
            return 0;
            });
            }
               
          updateIngenieur(prod:Ingenieur) : Observable<Ingenieur>
{
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
  return this.http.put<Ingenieur>(this.apiURL+"/updateprod", prod,  {headers:httpHeaders});

}
listeProjets():Observable<ProjetWrapper> {
  let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})

  return this.http.get<ProjetWrapper>(this.apiURLProj,{headers:httpHeaders});
  

  } 
  consulterProjet(id:number): Projet{ 
    return this.projets.find(proj => proj.idProj == id)!;
    }
    rechercherParProjet(idProj: number):Observable< Ingenieur[]> {
      const url = `${this.apiURL}/prodscat/${idProj}`;
      return this.http.get<Ingenieur[]>(url);
      }
      rechercherParNom(nom: string):Observable< Ingenieur[]> {
        const url = `${this.apiURL}/prodsByName/${nom}`;
        return this.http.get<Ingenieur[]>(url);
        }
        ajouterProjet( cat: Projet):Observable<Projet>{
          return this.http.post<Projet>(this.apiURLProj, cat, httpOptions);
          }
          uploadImage(file: File, filename: string): Observable<Image>{ 
            const imageFormData = new FormData(); 
            imageFormData.append('image', file, filename); 
            const url = `${this.apiURL + '/image/upload'}`; 
            return this.http.post<Image>(url, imageFormData); 
         } 
     
    loadImage(id: number): Observable<Image> { 
      const url = `${this.apiURL + '/image/get/info'}/${id}`; 
      return this.http.get<Image>(url); 
    } 
    uploadImageProd(file: File, filename: string, idProd:number): Observable<any>{ 
      const imageFormData = new FormData(); 
      imageFormData.append('image', file, filename); 
      const url = `${this.apiURL + '/image/uplaodImageProd'}/${idProd}`; 
      return this.http.post(url, imageFormData); 
    } 
    supprimerImage(id : number) { 
      const url = `${this.apiURL}/image/delete/${id}`; 
      return this.http.delete(url, httpOptions); 
      } 
}
