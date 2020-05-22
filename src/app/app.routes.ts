import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtisteComponent } from './components/artiste/artiste.component';

//  creation des routes
export const ROUTES: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artiste/:id', component: ArtisteComponent },
  { path: ' ', pathMatch: 'full', redirectTo: 'home' },
  { path: '** ', pathMatch: 'full', redirectTo: 'home' }
]
