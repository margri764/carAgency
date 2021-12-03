import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZeromileCarsService {

  arrayChevrolet = [
    {
      name: "Cruze",
      img: "./assets/cruze.png"
    },
    {
      name: "S10",
      img: "./assets/s10.png"
    },
   
  ];

  arrayFord= [
    {
      name: "Ford1",
      img: "./assets/logo_ford.png"
    },
    {
      name: "Ford2",
      img: "./assets/logo_ford.png"
    },
   
  ]

  constructor() { }

  getZeroCars(brandCar : string){

  switch ( brandCar ){
    case 'chevrolet':
        return this.arrayChevrolet;
   
    case 'ford':
       return this.arrayFord;

       default :return null;

  }
  }
}
