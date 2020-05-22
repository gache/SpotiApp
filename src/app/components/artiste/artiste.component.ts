import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css']
})
export class ArtisteComponent implements OnInit {

  // propriete
artiste: any = {};
loadingArtist: boolean;

  constructor(private router: ActivatedRoute,
              private spotiService: SpotifyService) {
    this.loadingArtist = true; // loading charge l'information
    //  j'obtien le parametre avec son id avec je fais subscribe pour obtenir n'importe changement de ce parametre
    this.router.params.subscribe( params => {
    this.getArtistIndi( params['id'] ); // j'appelle ma methode pour avoir l'artiste avec id
    });
  }

  ngOnInit() {
  }
// Methode pour avoir l'artiste individuelle
  getArtistIndi(id: string) {
    this.loadingArtist = true; // loading charge l'information
    this.spotiService.getArtist(id)
        .subscribe( resp => {
        this.artiste = resp;
        this.loadingArtist = false; // loading a chargé l'information
        console.log(resp);
        
        });

}

}
