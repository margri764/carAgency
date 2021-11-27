import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ZeromileComponent } from './pages/zeromile/zeromile.component';

const routes : Routes = [
  {
    path: 'zeromile', component: ZeromileComponent
  }
] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
 
  
})
export class CarsRoutingModule { }
