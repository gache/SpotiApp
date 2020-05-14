import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service"; // Importation de mon service

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {

  newChanson: any[] = [];

  // j'injecte mon service au contructor pour y acceder à la petition get
  constructor(private httpService: SpotifyService) {
    this.httpService.getNewRelease()
    .subscribe((data: any) => {
      console.log(data.albums.items);
      this.newChanson = data.albums.items;
    });
    // On entend par subscribe de dire à angular, de se préparer car ça c'est une petition. et
    // à n'importe à quel moment quelqu'un va s'inscrire.
    // On entend par subscribe d'être à l'ecouter du changement ou l'information que cette service peut nous retourner
  }

  ngOnInit() { }
}
