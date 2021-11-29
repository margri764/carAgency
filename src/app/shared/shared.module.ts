import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideUpComponent } from './pages/slide-up/slide-up.component';
import { Page404Component } from './pages/page404/page404.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    NavbarComponent,
    SlideUpComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    SharedRoutingModule,
    NgbModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    Page404Component

  ]
})
export class SharedModule { }
