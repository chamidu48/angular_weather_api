import { Component, OnInit } from '@angular/core';
import { DataSaveService } from '../services/data-save.service';
import { Country } from '../interfaces/country';
import { Router } from '@angular/router';


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
  name:string=""
  description:string=""
  main:string=""

  snowBackground={
    'height': '100vh',
    'width': '100vw',
    'background-size': 'cover',
    'background-image': 'url("/assets/images/snow.jpg")',
    'background-repeat': 'no-repeat',
    'background-position': 'center'
  }
  clearBackground={
    'height': '100vh',
    'width': '100vw',
    'background-size': 'cover',
    'background-image': 'url("/assets/images/clear.jpg")',
    'background-repeat': 'no-repeat',
    'background-position': 'center'
  }
  rainBackground={
    'height': '100vh',
    'width': '100vw',
    'background-size': 'cover',
    'background-image': 'url("/assets/images/rain.jpg")',
    'background-repeat': 'no-repeat',
    'background-position': 'center'
  }
  cloudBackground={
    'height': '100vh',
    'width': '100vw',
    'background-size': 'cover',
    'background-image': 'url("/assets/images/clouds.jpg")',
    'background-repeat': 'no-repeat',
    'background-position': 'center'
  }
  sunnyBackground={
    'height': '100vh',
    'width': '100vw',
    'background-size': 'cover',
    'background-image': 'url("/assets/images/sunny.jpg")',
    'background-repeat': 'no-repeat',
    'background-position': 'center'
  }


  constructor(private dataSaveService:DataSaveService,private router:Router){}

  chooseClass(){
    console.log("choose class")
    switch(this.country.main) { 
      case "Snow": {
        return this.snowBackground 
        break; 
      } 
      case "Rain": { 
        return this.rainBackground
        break; 
      } 
      case "Clouds": { 
        return this.cloudBackground
        break;
     } 
      default: {  
        return this.sunnyBackground
        break; 
      } 
   }
  }

  chooseIcon(){
    return {
      'background-size': 'cover',
      'background-image': 'url("https://openweathermap.org/img/wn/'+this.country["icon"]+'@2x.png")',
      'background-repeat': 'no-repeat',
      'background-position': 'center'
    }
  }

  onBack(){
    this.router.navigateByUrl('/')
  }

  ngOnInit(): void {
    this.country=this.dataSaveService.getData()
    this.name=this.country["name"]
    this.main=this.country["main"]
    this.description=this.country["description"]
    this.temperature=this.country["temp"]
    this.pressure=this.country["pressure"]
    this.humidity=this.country["humidity"]
  }
  

}
