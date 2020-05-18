import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// la petition a besoin de header je fais l'importation.

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
      Authorization: "Bearer BQBGafHlsAr9F2G8mWPXDijMvLkxky2dQ5BKrFzknyi1MntqdK4gwr226Isi4pzWcZEfq6b0Jl4eiXH6Ao8"
    });
    // je fais appel à ma petition get avec l'utilisation des Headers
   return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers });
   // je fais return ça me permet de utliser le subscribe de la data où je veux
  }
}
