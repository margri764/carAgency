import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-car-wash',
  templateUrl: './car-wash.component.html',
  styleUrls: ['./car-wash.component.css']
})
export class CarWashComponent implements OnInit, AfterViewInit {

  @ViewChild('bsStepper', { static: false }) stepperElement!: ElementRef<any>;


  private currentImage: any;
  private timer : string =""
  disabledBrand : boolean = false;
  disabledModel : boolean = false;
  public stepper!: Stepper;
  public date: Date = new Date(); 


 carWashArray = [
    { path: "./assets/carwash1.png" },
    { path: "./assets/carwash2.png" },
    { path: "./assets/carwash3.png" },
    { path: "./assets/carwash4.png" },
    { path: "./assets/carwash5.png" },
   ]


  updateRandomImage() {
    const showRandomImg= Math.floor(Math.random() * (this.carWashArray.length )) ;
    return this.carWashArray[showRandomImg];
  }

  getImage() {
    return this.currentImage.path;
  }

  constructor( ) {
                this.currentImage = this.updateRandomImage();
  }

  goToBrand(value:string){}
  goToModel (value : string){}

  
  next() {
    this.stepper.next();
  }

  previous(){
    this.stepper.previous();
  }

  ngAfterViewInit() {

    this.stepper = new Stepper(this.stepperElement.nativeElement, {
      linear: false,
      animation: true
    });
    
    // this.element = this.target.nativeElement;
  }

  ngOnInit(): void {
    
    const clear = setInterval(() => {
    this.currentImage = this.updateRandomImage();
    if(!window.location.pathname.includes('car-wash')){ 
      clearInterval(clear)
    }
    }, 2000);

  }
  


}
