import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideUpComponent } from './pages/slide-up/slide-up.component';
import { Page404Component } from './pages/page404/page404.component';
import { SharedRoutingModule } from './shared-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { StartComponent } from './pages/start/start/start.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    NavbarComponent,
    SlideUpComponent,
    Page404Component,
    LoginComponent,
    StartComponent
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FlexLayoutModule,
    FormsModule,
    NgbModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    Page404Component,
    SlideUpComponent,
    LoginComponent, 
    StartComponent
  ],
})
export class SharedModule { }
