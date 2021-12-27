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
  disabled = false;
  public showCardOne : string = "block";
  public showCardTwo : string = "none";



  constructor(      ) {
           }

toggleNavbarOne() {
 this.showCardTwo = "none";
 (this.showCardOne == "none") ? this.showCardOne = "block" :  this.showCardOne = "block"

}

toggleNavbarTwo() {
  this.showCardOne = "none";
  (this.showCardTwo == "none") ? this.showCardTwo = "block" :  this.showCardTwo = "block"

  }
        


  ngAfterViewInit(): void {

    this.element = this.div.nativeElement;

    setTimeout( () => {

    this.element.scrollIntoView(
      { 
        alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      this.scrolled = true;
      }, 0);


 }






  ngOnInit(): void { }

  


}
