import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeromileComponent } from './pages/zeromile/zeromile.component';
import { CarsRoutingModule } from './cars-routing.module';
import { UsedCarComponent } from './pages/used-car/used-car.component';



@NgModule({
  declarations: [
    ZeromileComponent,
    UsedCarComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule
  ],
  exports:[
    ZeromileComponent,
    UsedCarComponent
  ]
})
export class CarsModule { }
