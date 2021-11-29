import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../pages/admin/admin/admin.component';

const routes : Routes = [
 {
  path:'',
  children : [
  { path: "admin", component: AdminComponent}
   ]
  } 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild ( routes )
  ],
  exports: [ RouterModule]
})
export class ProtectedRoutingModule { }
