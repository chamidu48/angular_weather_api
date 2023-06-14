import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ResultComponent } from './result/result.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { TempComponent } from './temp/temp.component';
import { HumidityComponent } from './humidity/humidity.component';
import { PressureComponent } from './pressure/pressure.component';
import {HttpClientModule} from '@angular/common/http'

const appRoutes : Routes = [
  {path:"",redirectTo:"", pathMatch: "full"},
  {path:"", component: SearchbarComponent},
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
    PressureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
