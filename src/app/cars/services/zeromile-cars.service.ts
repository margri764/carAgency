import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZeromileCarsService {

  arrayChevroletCars = [
    {
      name: "Cruze",
      img: "./assets/cruze.png"
    },
    {
      name: "Cruze 5",
      img: "./assets/cruze2.png"
    },
    {
      name: "S10",
      img: "./assets/s10.png"
    },
    {
      name: "Joy",
      img: "./assets/joy.png"
    },
    {
      name: "Joy Plus",
      img: "./assets/joyPlus.png"
    },
    {
      name: "Onix",
      img: "./assets/onix.png"
    },
    {
      name: "Onix Plus",
      img: "./assets/onixPlus.png"
    },   
  ];

  arrayChevroletSuv = [
    {
      name: "Nueva Tracker",
      img: "./assets/tracker.png"
    },
    {
      name: "Spin",
      img: "./assets/spin.png"
    },
    {
      name: "Equinox",
      img: "./assets/equinox.png"
    },
    {
      name: "Trailblazer",
      img: "./assets/trailblazer.png"
    },
  ];

  arrayChevroletPickups=[
    {
      name: "S10 High Country",
      img: "./assets/s10High.png"
    },
    {
      name: "S10 Cabina Simple",
      img: "./assets/s10Simple.png"
    },
    {
      name: "S10 Cabina Doble",
      img: "./assets/s10Doble.png"
    },
  ];

  arrayChevroletSports = [
    {
      name: "Camaro Coupe",
      img: "./assets/camaroCoupe.jpg"
    },
    {
      name: "Camaro Convertible",
      img: "./assets/camaroConvertible.png"
    },


  ]


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

 
  getBrandCars(brandCar : string){

  switch ( brandCar ){
    case 'chevrolet':
        return this.arrayChevroletCars;
   
    case 'ford':
       return this.arrayFord;

       default :return null;

   }
  };

  getModelCars(modelCar : string){

    switch ( modelCar ){
      case 'car':
          return this.arrayChevroletCars;
     
      case 'suv':
         return this.arrayChevroletSuv;

      case 'pickups':
      return this.arrayChevroletPickups;  
      
      case 'sports':
        return this.arrayChevroletSports; 
  
         default :return null;
  
     }
    }
}
