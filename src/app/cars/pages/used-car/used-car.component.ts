import { AfterViewInit, Component, ElementRef, OnInit,  ViewChild } from '@angular/core';

@Component({
  selector: 'app-used-car',
  templateUrl: './used-car.component.html',
  styleUrls: ['./used-car.component.css']
})
export class UsedCarComponent implements OnInit, AfterViewInit {

  @ViewChild ("div" , {static: true} ) div! : ElementRef;

  element : any;
  scrolled: boolean = false;

  constructor(      ) {
           }



  ngAfterViewInit(): void {

    this.element = this.div.nativeElement;

    setTimeout( () => {

    this.element.scrollIntoView(
      { alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      this.scrolled = true;
      }, 0);


 }






  ngOnInit(): void { }

  


}
