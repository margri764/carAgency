import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slide-used-car',
  templateUrl: './slide-used-car.component.html',
  styleUrls: ['./slide-used-car.component.css']
})
export class SlideUsedCarComponent implements OnInit {


  arrayUsedCars = [
    {
      img1: "./assets/micruze1.jpeg",
      img2: "./assets/micruze2.jpeg",
      img3: "./assets/micruze3.jpeg",
      img4: "./assets/micruze4.jpeg",
      img5: "./assets/5.jpg"
    },
  ]

  img1 : string = '';
  img2 : string = '';
  img3 : string = '';
  img4 : string = '';
  img5 : string = '';
  clicked : boolean = false; 
  move : boolean = false; 
  value : number = 250;





// images = [
//   {path: '/assets/cruze.png'},
//   {path: '/assets/cruze2.png'},
//   {path: '/assets/s10.png'},
//   {path: '/assets/s10Doble.png'},

// ];   


  constructor() {

}

mainImg(){
  this.arrayUsedCars.forEach((item)=>{ 
    this.img1 = item.img1;
    this.img2 = item.img2;
    this.img3 = item.img3;
    this.img4 = item.img4;
    this.img5 = item.img5;
 
   })
 }
 
 goToMainImg (value : string){
 
   switch( value ){ 
     case 'img2' :
                this.img1 = this.img2; 
      break;
     
     case 'img3': 
               this.img1 = this.img3; 
     break;
 
     case 'img4': 
     this.img1 = this.img4; 
     break;
 
     case 'img5': 
     this.img1 = this.img5; 
     break;
   }
 }


valueToHeightCarousel(){
  if (screen.width > 300 && screen.width < 574){
    this.value = 160;
    return;
  }
  if (screen.width > 574 && screen.width < 768){
    this.value = 180;
    return;
  }
  if (screen.width > 768 && screen.width < 1300){
    this.value = 190;
    return;
  }
  if (screen.width > 1300 ){
    this.value = 220;
    return;
  }
}


  ngOnInit(): void {
    this.mainImg();
    this.valueToHeightCarousel();
  }

}
