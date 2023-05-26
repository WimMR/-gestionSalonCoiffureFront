import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvisComponent } from './Avis/avis/avis.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UtilisateurComponent } from './utilisateur/utilisateur/utilisateur.component';
import { ReservationComponent } from './reservation/reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    UtilisateurComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // [(ngModel)] : Two-way DataBinding
    HttpClientModule // Pour utiliser les verbes http : GET,POST,PUT,DELETE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
