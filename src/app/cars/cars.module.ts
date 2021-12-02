import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeromileComponent } from './pages/zeromile/zeromile.component';
import { CarsRoutingModule } from './cars-routing.module';
import { UsedCarComponent } from './pages/used-car/used-car.component';
import { CarWashComponent } from './pages/car-wash/car-wash/car-wash.component';
import { WorkshopComponent } from './pages/workshop/workshop/workshop.component';
import { ShopComponent } from './pages/shop/shop/shop.component';
import { FormalitiesComponent } from './pages/formalities/formalities/formalities.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './pages/form/form/form.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ZeromileComponent,
    UsedCarComponent,
    CarWashComponent,
    WorkshopComponent,
    ShopComponent,
    FormalitiesComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule
    
  ],
  exports:[
    ZeromileComponent,
    UsedCarComponent,
    WorkshopComponent,
    CarWashComponent,
    ShopComponent,
    FormalitiesComponent


  ]
})
export class CarsModule { }
