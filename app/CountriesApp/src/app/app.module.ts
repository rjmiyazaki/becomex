import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaisComponent } from './pais/pais.component';
import { BuscaComponent } from './busca/busca.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryinfoComponent } from './countryinfo/countryinfo.component';
import { BuscaSiglaComponent } from './buscaSigla/buscaSigla.component';
import { BuscaMoedaComponent } from './buscaMoeda/buscaMoeda.component';

@NgModule({
  declarations: [	
    AppComponent,
      NavComponent,
      PaisComponent,
      BuscaComponent,
      CountryinfoComponent,
      BuscaSiglaComponent,
      BuscaMoedaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
