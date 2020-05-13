import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // pour importer mes routes  je dois importer  le routerModule

// Importation Routes
import { ROUTES } from './app.routes'; // Importation de ma route

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtisteComponent } from './components/artiste/artiste.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtisteComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
