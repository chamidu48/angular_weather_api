import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {

  @Input() temperature:string | undefined

  constructor(private router:Router){}
  onBack(){
    this.router.navigateByUrl('/')
  }
}
