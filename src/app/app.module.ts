import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ResultComponent } from './result/result.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { TempComponent } from './temp/temp.component';
import { HumidityComponent } from './humidity/humidity.component';
import { PressureComponent } from './pressure/pressure.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search/search.component'

const appRoutes : Routes = [
  {path:"",redirectTo:"", pathMatch: "full"},
  {path:"", component: SearchComponent},
  {path:"result", component:ResultComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    ResultComponent,
    ErrorComponent,
    TempComponent,
    HumidityComponent,
    PressureComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
