import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  createCountry(temp:string, pressure:string, humidity:string):Country{
    const country:Country={
      temp:temp,
      pressure:pressure,
      humidity:humidity
    }
    return country
  }
}
