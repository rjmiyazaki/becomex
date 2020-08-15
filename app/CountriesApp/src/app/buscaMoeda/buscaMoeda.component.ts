import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CountryService } from '../services/country.service';
import { Country } from '../models/country';
import { CountryinfoComponent } from '../countryinfo/countryinfo.component';

@Component({
  selector: 'app-buscaMoeda',
  templateUrl: './buscaMoeda.component.html',
  styleUrls: ['./buscaMoeda.component.css']
})

export class BuscaMoedaComponent implements OnInit {

  textoBusca = "";

  country = {} as Country;
  countries: Country[];

 bsModalRef: BsModalRef;

  openModal(name: string){
      const initialState = {
        nome: name,
      };

    this.bsModalRef = this.modalService.show(CountryinfoComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  constructor(private countryService: CountryService, private modalService: BsModalService) { }

  ngOnInit() {
  }

  buscarPorMoeda(){
    this.countryService.getCountryListByName(this.textoBusca).subscribe((countries: Country[]) => {
      this.countries = countries;
    });
  }

}
