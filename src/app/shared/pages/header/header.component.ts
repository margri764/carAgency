import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  clicked: boolean= false;
  disabled = true;

  constructor(
              private router : Router,
              public route : ActivatedRoute
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
