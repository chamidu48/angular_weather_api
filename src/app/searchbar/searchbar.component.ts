import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Country } from '../interfaces/country';
import { DataSaveService } from '../services/data-save.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit{
  inputText:string=""
  country:Country | any;

  constructor(private apiService:ApiService,  private dataSaveService:DataSaveService, private router:Router){}

  ngOnInit(): void {
  }

  getData(input:string){
    this.apiService.getData(input).subscribe((res)=>{
      console.log(res)
      this.country=res;
      console.log(this.country["temp"])
      this.dataSaveService.saveData(this.country)
      this.router.navigateByUrl('/result')
  })
  }

  onSearchClick(){
    if(this.inputText!=""){
      this.getData(this.inputText)
    }
    else{
      alert("Please enter city")
    }
  }
}
