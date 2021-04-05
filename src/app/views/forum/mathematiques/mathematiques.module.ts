import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathematiquesRoutingModule } from './mathematiques-routing.module';
import { MathsHomeComponent } from './maths-home/maths-home.component';


@NgModule({
  declarations: [
    MathsHomeComponent
  ],
  imports: [
    CommonModule,
    MathematiquesRoutingModule
  ]
})
export class MathematiquesModule { }
