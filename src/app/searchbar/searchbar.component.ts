import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Country } from '../interfaces/country';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit{
  inputText:string=""
  country:Country | any;

  constructor(private apiService:ApiService){}

  ngOnInit(): void {
  }

  getData(input:string){
    this.country=this.apiService.getWeather(input)
  }

  onSearchClick(){
    if(this.inputText!=""){
      this.getData(this.inputText)
    }
  }
}
