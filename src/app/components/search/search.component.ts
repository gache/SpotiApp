import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistes: any [] =[];

  constructor(private spotiService: SpotifyService) { }

  ngOnInit() {
  }


  recherche(terme: string) {
    this.spotiService.getArtist(terme)
        .subscribe((data: any) => {
        console.log(data);
        this.artistes = data;
    });

  }
}
