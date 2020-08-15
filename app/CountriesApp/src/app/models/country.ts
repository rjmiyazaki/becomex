import { Currency } from '../models/currency';
import { RegionalBloc } from '../models/regionalbloc';
import { Language } from '../models/language';

export interface Country {
  name: string;
  flag: string;
  alpha2Code: string;
  alpha3Code: string;
  currencies: Currency;
  regionalBlocs: RegionalBloc;
  population: string;
  timezones: string;
  languages: Language;
  capital: string;
  borders: string;
}
