import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CountryService } from '../services/country.service';
import { Country } from '../models/country';
import { TemplateRef } from '@angular/core';
import { CountryinfoComponent } from '../countryinfo/countryinfo.component';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})

export class BuscaComponent implements OnInit {

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

  buscarPorNome(){
    this.countryService.getCountryListByName(this.textoBusca).subscribe((countries: Country[]) => {
      this.countries = countries;
    });
  }
}


