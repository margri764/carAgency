import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './shared/pages/contact-us/contact-us.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { Page404Component } from './shared/pages/page404/page404.component';

const routes: Routes = [



  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then( m => m.CarsModule )
  },
  {
    path: "", redirectTo: "home", pathMatch: 'full'
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "404", component: Page404Component
  },
  {
    path: "**", redirectTo: "404"
  },
 
 



  // {
  //   path: 'protected',
  //   loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule )
  // },


   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
