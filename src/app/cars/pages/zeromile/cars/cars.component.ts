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
  @Input() brandSelection= '';
  @Input() modelSelection= '';


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

  brandFromBackend(){
    this.arrayCars = this.zeromileCarsservice.getBrandCars(this.brandSelection);
  };

  modelFromBackend(){
    this.arrayCars = this.zeromileCarsservice.getModelCars(this.modelSelection);
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
    if(this.brandSelection){
      this.brandFromBackend();
      this.brandSelection='';
    };

    if(this.modelSelection){
      this.modelFromBackend();
      this.modelSelection='';
    };

    }


  ngOnInit(): void {

  }

}
