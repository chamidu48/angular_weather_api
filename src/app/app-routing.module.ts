import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';

const routes : Routes = [
  {path:"",redirectTo:"", pathMatch: "full"},
  {path:"", component: SearchComponent},
  {path:"result", component:ResultComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
