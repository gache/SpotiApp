import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// la petition a besoin de header je fais l'importation.

import {map} from 'rxjs/operators';  // importation  de l'operator map
// operator map filtre l'information que je souhaite montrer.
// operator map travaille avec observables.

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  // j'injecte le module HttpClient à mon contructor pour y acceder aux propriétés et methodes du module
  constructor(private http: HttpClient) {}

  getQuery( query: string) {
  // comme l'adresse url de ma petition change à partir de slash, je la centralise dans une constante l'Url de l'Api pour de nouvelle version future
    const URL = `https://api.spotify.com/v1/${ query }`;

  // cette Api a besoin du token ou une autentification pour envoyer l'information
  // dans notre cas on ava uitiliser l'headers avec une autentification
    const headers = new HttpHeaders ({
    // ici je mets tous les header que l'Api a besoin
    Authorization: 'Bearer BQBD77ElDiVB0CEeGZqV9B1BuraiXj1gvGLlw9BYpEKHOOjdsD__mpXkAmqnRX0hOlKZnXTLucir_SRBaJM'
  });
    return this.http.get( URL, { headers} );
  }

  // petition get avoir la liste de chanson la plus écouter
  getNewRelease() {
    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data => {
               return data['albums'].items;
   // pour utiliser operator map j'utilise un pipe avec l'operator map pour filtrer l'information de l'Api
   }));
  }

  // petition get pour avoir l'artiste de mamnière individuelle
  getArtist(terme: string) {
  return this.getQuery(`search?q=${ terme }&type=artist&limit=15 `)
             .pipe(map( data => {
             return data ['artists'].items;
 }));

  }
}
