import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {

  constructor(
              private myElement : ElementRef
  ) { }



  ngOnInit(): void {
  }

  goToElement() {
    let el = this.myElement.nativeElement.querySelector('.test');
    el.scrollIntoView({behavior:"smooth"});
  }

}
