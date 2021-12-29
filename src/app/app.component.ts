import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Routes } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'carAgency';

  constructor( public router : Router )  {  }

 

}
