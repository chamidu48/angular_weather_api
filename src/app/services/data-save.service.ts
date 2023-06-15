import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class DataSaveService {

  private country:any;

  constructor() { }

  saveData(data:any){
    this.country=data
  }

  getData():any{
    return this.country
  }
}
