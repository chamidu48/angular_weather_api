import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Country } from "../interfaces/country";
import { DataSaveService } from "./data-save.service";
import { Router } from "@angular/router";

@Injectable({providedIn: "root"})
export class ApiService{
    country:Country | any;
    constructor(private client:HttpClient, private dataSaveService:DataSaveService, private router:Router){}
    
    //--get weather--
    getWeather(input:string){
        this.client.get('http://localhost:1323/weather?country='+input)
        .subscribe((res)=>{
            console.log(res)
            this.country=res;
            console.log(this.country["temp"])
            this.dataSaveService.saveData(this.country)
            this.router.navigateByUrl('/result')
        })
    }

    
}