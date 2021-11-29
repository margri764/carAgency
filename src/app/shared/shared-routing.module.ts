import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [ 
 
  {
    path:"contact-us", component: ContactUsComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'page404', component: Page404Component
  },
 
  
]  


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [
  RouterModule
  ]
 

})
export class SharedRoutingModule { }
