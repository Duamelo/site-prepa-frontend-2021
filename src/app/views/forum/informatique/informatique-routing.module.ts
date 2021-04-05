import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoHomeComponent } from './info-home/info-home.component';

const routes: Routes = [
  {
    path:'informatique', component: InfoHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformatiqueRoutingModule { }
