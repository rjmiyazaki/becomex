import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CountryService } from '../services/country.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-countryinfo',
  templateUrl: './countryinfo.component.html',
  styleUrls: ['./countryinfo.component.css']
})

export class CountryinfoComponent implements OnInit {

  nome: string;
  country = {} as Country;
  countries: Country[];

  constructor(private bsModalRef: BsModalRef, private countryService: CountryService) {}

  ngOnInit() {
    this.getCountryInfoByName();
  }

  confirm() {
      // do stuff
      this.close();
  }

  close() {
      this.bsModalRef.hide();
  }

  onshow(){
    //this.getCountryInfoByName();
  }

  getCountryInfoByName(){
    this.countryService.getCountryInfoByName(this.nome).subscribe((countries: Country[]) => {
      this.country = countries[0];
    });
  }

}
