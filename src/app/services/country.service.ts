import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  createCountry(name:string, main:string, description:string ,temp:string, pressure:string, humidity:string, icon:string):Country{
    const country:Country={
      name:name,
      main:main,
      description:description,
      temp:temp,
      pressure:pressure,
      humidity:humidity,
      icon:icon
    }
    return country
  }
}
