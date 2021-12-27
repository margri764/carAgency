import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ZeromileComponent } from './pages/zeromile/zeromile/zeromile.component';
import { UsedCarComponent } from './pages/used-car/used-car.component';
import { CarWashComponent } from './pages/car-wash/car-wash/car-wash.component';
import { WorkshopComponent } from './pages/workshop/workshop/workshop.component';
import { ShopComponent } from './pages/shop/shop/shop.component';
import { FormalitiesComponent } from './pages/formalities/formalities/formalities.component';
import { FormComponent } from './pages/form/form/form.component';
import { CarsComponent } from './pages/zeromile/cars/cars.component';

const routes : Routes = [
  {
    path: '',   
    children: [
    { path: 'used-car', component: UsedCarComponent },
    { path: 'zeromile', component: ZeromileComponent },
    { path: 'car-wash', component: CarWashComponent },
    { path: 'workshop', component: WorkshopComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'formalities', component: FormalitiesComponent },
    { path: 'form', component: FormComponent },
    // { path: 'cars', component: CarsComponent },







   ] 
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports:[
    RouterModule
  ]
 
  
})
export class CarsRoutingModule { }
