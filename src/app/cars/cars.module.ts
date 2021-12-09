import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';


import { ZeromileComponent } from './pages/zeromile/zeromile.component';
import { CarsRoutingModule } from './cars-routing.module';
import { UsedCarComponent } from './pages/used-car/used-car.component';
import { CarWashComponent } from './pages/car-wash/car-wash/car-wash.component';
import { WorkshopComponent } from './pages/workshop/workshop/workshop.component';
import { ShopComponent } from './pages/shop/shop/shop.component';
import { FormalitiesComponent } from './pages/formalities/formalities/formalities.component';
import { FormComponent } from './pages/form/form/form.component';
import { CarsComponent } from './pages/zeromile/cars/cars.component';



@NgModule({
  declarations: [
    ZeromileComponent,
    UsedCarComponent,
    CarWashComponent,
    WorkshopComponent,
    ShopComponent,
    FormalitiesComponent,
    FormComponent,
    CarsComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgbModule


    
    
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
