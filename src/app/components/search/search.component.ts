import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // propriété
  artistes: any[] = [];
  loading: boolean;

  constructor(private spotiService: SpotifyService) {

  }

  ngOnInit() {
  }

  // le parametre terme: c'est tous ce que la personne ecrit dans l'input de la recherche dans search.component.html
  recherche(terme: string) {
    this.loading = true; // loading charge l'information
    this.spotiService.getArtist(terme)
      .subscribe((data: any) => {
        console.log(data);
        this.artistes = data;
        this.loading = false; // loading a chargé l'information
      });

  }
}
