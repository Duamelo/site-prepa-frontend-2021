import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformatiqueRoutingModule } from './informatique-routing.module';
import { InfoHomeComponent } from './info-home/info-home.component';


@NgModule({
  declarations: [
    InfoHomeComponent
  ],
  imports: [
    CommonModule,
    InformatiqueRoutingModule
  ]
})
export class InformatiqueModule { }
