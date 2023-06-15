import { Component, OnInit } from '@angular/core';
import { DataSaveService } from '../services/data-save.service';
import { Country } from '../interfaces/country';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  private country:Country | any;
  temperature:string = "";
  pressure:string=""
  humidity:string=""

  constructor(private dataSaveService:DataSaveService){}

  ngOnInit(): void {
    this.country=this.dataSaveService.getData()
    this.temperature=this.country["temp"]
    this.pressure=this.country["pressure"]
    this.humidity=this.country["humidity"]
  }
  

}
