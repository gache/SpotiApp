import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// la petition a besoin de header je fais l'importation.

import {map} from 'rxjs/operators';  // importation  de l'operator map
// operator map filtre l'information que je souhaite montrer.
// operator map travaille avec observables.

@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  // j'injecte le module HttpClient à mon contructor pour y acceder aux propriétés et methodes du module
  constructor(private http: HttpClient) {}

  // petition get
  getNewRelease() {
  // cette Api a besoin du token ou une autentification pour envoyer l'information
  // dans notre cas on ava uitiliser l'headers avec une autentification
    const headers = new HttpHeaders({
      // ici je mets tous les header que l'Api a besoin
      Authorization: "Bearer BQCnoyFAYgcGfoF9xH8cxEjED-H6RLe50cc0Bq4R_kmIordVKhiGi57j-HM4XbCCC-iFFeeSufOY_-w52o0"
    });
    // je fais appel à ma petition get avec l'utilisation des Headers
   return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers })
   // je fais return ça me permet de utliser le subscribe de la data où je veux
              .pipe( map( data => {
              return data ['albums'].items;
   // pour utiliser operator map j'utilise un pipe avec l'operator map pour filtrer l'information de l'Api
   }));
  }


  // methode pour avoir l'artiste de mamnière individuelle

  getArtist(terme: string){
  // cette Api a besoin du token ou une autentification pour envoyer l'information
  // dans notre cas on ava uitiliser l'headers avec une autentification
  const headers = new HttpHeaders({
    // ici je mets tous les header que l'Api a besoin 
    Authorization: "Bearer BQCnoyFAYgcGfoF9xH8cxEjED-H6RLe50cc0Bq4R_kmIordVKhiGi57j-HM4XbCCC-iFFeeSufOY_-w52o0"
  });
  // je fais appel à ma petition get avec l'utilisation des Headers
 return this.http.get(`https://api.spotify.com/v1/search?q=${ terme } &type=artist&limit=15`, { headers })
            .pipe(map( data => {
            return data ['artists'].items;
 }));
 // je fais return ça me permet de utliser le subscribe de la data où je veux

  }
}
