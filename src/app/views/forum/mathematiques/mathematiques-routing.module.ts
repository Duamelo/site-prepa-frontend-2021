import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathsHomeComponent } from './maths-home/maths-home.component';

const routes: Routes = [
  {
    path: 'mathematiques', component: MathsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathematiquesRoutingModule { }
