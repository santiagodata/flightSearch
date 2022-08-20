import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResultsComponent} from "./components/results/results.component";
import {FormSearchComponent} from "./components/form-search/form-search.component";


const routes: Routes = [
  { path: 'results', component: ResultsComponent },
  { path: 'search', component: FormSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
