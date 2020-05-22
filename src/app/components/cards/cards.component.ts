import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() chansons: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  // avoir l'artiste avec son Id
  voirArtiste(chanson: any) {

    let artisteId;
    if (chanson.terme === 'artist') {
      artisteId = chanson.id;
    } else {
      artisteId = chanson.artists[0].id;
    }

    this.router.navigate(['/artiste', artisteId])
    // console.log(artisteId);


  }

}
