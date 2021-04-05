import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhysiquesRoutingModule } from './physiques-routing.module';
import { PhyHomeComponent } from './phy-home/phy-home.component';


@NgModule({
  declarations: [
    PhyHomeComponent
  ],
  imports: [
    CommonModule,
    PhysiquesRoutingModule
  ]
})
export class PhysiquesModule { }
