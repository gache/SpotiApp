import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service"; // Importation de mon service

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  // propriété
  newChanson: any[] = [];
  loading: boolean;

  // j'injecte mon service au contructor pour y acceder à la petition get
  constructor(private httpService: SpotifyService) {

    this.loading = true; // loading charge l'information
    this.httpService.getNewRelease()
      // je mets subscribe à la petition get pour avoir l'information de l'Api.
      .subscribe((data: any) => {
        console.log(data);
        this.newChanson = data;
        this.loading = false; // loading a chargé l'information
      });
    // On entend par subscribe de dire à angular, de se préparer car ça c'est une petition. et
    // à n'importe à quel moment quelqu'un va s'inscrire.
    // On entend par subscribe d'être à l'ecouter du changement ou l'information que cette service peut nous retourner
  }

  ngOnInit() { }
}
