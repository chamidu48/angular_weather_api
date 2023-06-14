import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.apiService.getWeather()
  }


}
