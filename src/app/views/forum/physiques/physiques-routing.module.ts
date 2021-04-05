import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhyHomeComponent } from './phy-home/phy-home.component';

const routes: Routes = [
  {
    path:'physiques', component:PhyHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhysiquesRoutingModule { }
