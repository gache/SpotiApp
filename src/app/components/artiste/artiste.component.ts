import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css']
})
export class ArtisteComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(resp => {
      console.log(resp['id']);
    });
  }

  ngOnInit() {
  }

}
