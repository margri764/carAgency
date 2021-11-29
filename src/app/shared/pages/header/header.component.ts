import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  clicked: boolean= false;
  disabled = true;

  constructor(
              private router : Router
  ) { }



showNavContent( ){
    this.clicked=true;
}


go(){
  this.router.navigateByUrl('./contact-us');
  console.log('fg')

}

  ngOnInit(): void {
  }

}
