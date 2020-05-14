import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  
  // j'injecte le module HttpClient à mon contructor pour y acceder aux propriétés et methodes du module
  constructor(private http: HttpClient) {}

  getNewRelease() {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQDCF6KhzIsezQBxfAzOfd1oLNYZeBoh696ujkQWtHnQEqZ4g-HpYxsOjaujNTeRazBa2cnHvtWEn-Xc74w"
    });

   return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers });
  }
}
