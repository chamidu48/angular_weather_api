import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {
  constructor(private router:Router){}
  onBack(){
    this.router.navigateByUrl('/')
  }
}
