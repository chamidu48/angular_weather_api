import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {
  }

  getData(){
  }

  onSearchClick(){
    this.router.navigateByUrl('/result')
  }
}
