import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Routes } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'carAgency';

  public disabled : boolean= false;

  constructor( public router : Router )  {  }


  ngOnInit(): void {

        setTimeout(()=>{

          this.disabled = true

        },5000)
  }

 

}
