import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeromileComponent } from './pages/zeromile/zeromile.component';
import { CarsRoutingModule } from './cars-routing.module';



@NgModule({
  declarations: [
    ZeromileComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule
  ],
  exports:[
    ZeromileComponent
  ]
})
export class CarsModule { }
