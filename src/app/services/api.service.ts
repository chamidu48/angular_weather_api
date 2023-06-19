import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";

@Injectable({providedIn: "root"})
export class ApiService{
    constructor(private client:HttpClient){}
    
    //--get weather--
    getData(input:string){
        return this.client.get(environment.apiUrl+input)
    }

    
}