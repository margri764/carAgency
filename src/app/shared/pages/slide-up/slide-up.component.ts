import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slide-up',
  templateUrl: './slide-up.component.html',
  styleUrls: ['./slide-up.component.css']
})
export class SlideUpComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
        config.interval = 10000;
        // config.wrap = false;
        // config.keyboard = false;
        // config.pauseOnHover = false;
   }


  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [
          {
            img: "../../../../assets/slide1.png"
          },
          {
            img: "../../../../assets/logo.png"
          }
];
  
  ngOnInit(): void {
  }




}
