import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-wash',
  templateUrl: './car-wash.component.html',
  styleUrls: ['./car-wash.component.css']
})
export class CarWashComponent implements OnInit {

  private currentImage: any;


 carWashArray = [
    { src: "./assets/carwash1.png" },
    { src: "./assets/carwash2.png" },
    { src: "./assets/carwash3.png" },
    { src: "./assets/carwash4.png" },
    { src: "./assets/carwash5.png" },
   ]


  updateRandomImage() {
    const showRandomImg= Math.floor(Math.random() * (this.carWashArray.length )) ;
    return this.carWashArray[showRandomImg];
  }

  getImage() {
    return this.currentImage.src;
  }

  constructor( ) {
                this.currentImage = this.updateRandomImage();
  }

  
  ngOnInit(): void {
    setInterval(() => {
      this.currentImage = this.updateRandomImage();
    }, 2000);
  }
  


}
