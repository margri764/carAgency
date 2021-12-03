import { AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ZeromileCarsService } from 'src/app/cars/services/zeromile-cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit, AfterViewChecked  {

  public arrayCars : any =[];
  public date = new Date();
  triggerNext : string = "true";
  triggerPrevious : string = "true";


  @Output()  triggerToNext= new EventEmitter<string>();
  @Output()  triggerToPrevious= new EventEmitter<string>();
  @Input() carSelection= '';


  constructor(
              private zeromileCarsservice : ZeromileCarsService,
              private cdRef:ChangeDetectorRef
  ) {
    // this.arrayCars = this.zeromileCarsservice.getZeroCars();

   }

   next(){
     this.triggerToNext.emit(this.triggerNext);
   }

   previous(){
    this.triggerToPrevious.emit(this.triggerPrevious);
  }

  carsFromBackend(){
    this.arrayCars = this.zeromileCarsservice.getZeroCars(this.carSelection);
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
    if(this.carSelection){
      this.carsFromBackend();
      this.carSelection='';
    };

    }


  ngOnInit(): void {

  }

}
