import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisComponent } from './pais/pais.component';
import { BuscaComponent } from './busca/busca.component';
import { BuscaSiglaComponent } from './buscaSigla/buscaSigla.component';
import { BuscaMoedaComponent } from './buscaMoeda/buscaMoeda.component';

const routes: Routes = [
  { path : 'pais', component: PaisComponent},
  { path : 'buscanome', component: BuscaComponent},
  { path : 'buscasigla', component: BuscaSiglaComponent},
  { path : 'buscamoeda', component: BuscaMoedaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
