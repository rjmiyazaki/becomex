import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  country = {} as Country;
  countries: Country[];

  public paisSelecionado: Country;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getAllCountries();
  }

  paisSelect(pais: Country){
    //this.paisSelecionado = pais;
    this.getCountryInfoByName(pais.name);
  }

  paisUnselect(){
    this.paisSelecionado = null;
  }

  getAllCountries(){
    this.countryService.getCountryList().subscribe((countries: Country[]) => {
      this.countries = countries;
    });
  }

  getCountryInfoByName(name: string){
    this.countryService.getCountryInfoByName(name).subscribe((countries: Country[]) => {
      this.paisSelecionado = countries[0];
    });
  }

}
