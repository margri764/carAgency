import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [
    {path: '/assets/cruze.png'},
    {path: '/assets/cruze2.png'},
    {path: '/assets/s10.png'},
    {path: '/assets/s10Doble.png'},
  
  ];   
  
  imagesForSlider = [
    {path: '/assets/cruze.png'},
    {path: '/assets/cruze2.png'},
    {path: '/assets/s10.png'},
    {path: '/assets/s10Doble.png'},
    // {path: '/assets/photo-1545420333-23a22b18b8fa.jfif'}
  ];
  
}
