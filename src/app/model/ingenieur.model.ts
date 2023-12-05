import { Projet } from "./projet.model";
import { Image } from "./Image.model";

export class Ingenieur {
    idIngenieur!: number;
    nomIngenieur! : string;
    expertise! : string;
    projet! : Projet;
    image! : Image ;
    imageStr!:string; 
    images!: Image[]; 
    }
    