import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ZeromileComponent } from './pages/zeromile/zeromile.component';
import { UsedCarComponent } from './pages/used-car/used-car.component';

const routes : Routes = [
  {
    path: '',   
    children: [
    { path: 'used-car', component: UsedCarComponent },
    { path: 'zeromile', component: ZeromileComponent },

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
