import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs';
import { AppoinmentService } from 'src/app/services/appoinment/appoinment.service';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})


export class WorkshopComponent implements OnInit, AfterViewChecked, AfterViewInit {

  @ViewChild ('datetimepicker1') datetimepicker1! :ElementRef;
 
  @ViewChild ('8') h8!   :ElementRef ;
  @ViewChild ('9') h9!   :ElementRef ;
  @ViewChild ('10') h10! :ElementRef ;
  @ViewChild ('11') h11! :ElementRef ;
  @ViewChild ('12') h12! :ElementRef ;




  testDisable(){
   
    
    this.resultAppointment.map(booking => ({
      ...booking,
      hour: booking.hour = (this.disableHour(booking.hour))
    }));
  }

  disableHour(value:any){

    if(value === this.h8.nativeElement.id){this.rendered.setProperty(this.h8.nativeElement,"disabled","true")}
    if(value === this.h9.nativeElement.id){this.rendered.setProperty(this.h9.nativeElement,"disabled","true")}
    if(value === this.h10.nativeElement.id){this.rendered.setProperty(this.h10.nativeElement,"disabled","true")}
    if(value === this.h11.nativeElement.id){this.rendered.setProperty(this.h11.nativeElement,"disabled","true")}
    if(value === this.h12.nativeElement.id){this.rendered.setProperty(this.h12.nativeElement,"disabled","true")}
    return value;
  }

  enableHour(){
      this.rendered.setProperty(this.h8.nativeElement,"disabled","")
      this.rendered.setProperty(this.h9.nativeElement,"disabled","")
      this.rendered.setProperty(this.h10.nativeElement,"disabled","")
      this.rendered.setProperty(this.h11.nativeElement,"disabled","")
      this.rendered.setProperty(this.h12.nativeElement,"disabled","")
  }
  
  public model!: NgbDateStruct;
  private model2! : NgbDateStruct;
  public actualDay!: NgbDateStruct;
  public date!: {year: number, month: number};
  private customDate : any = {};
  private value : number= 24;

  private hour!: number;
  public login : string = '';
  public resultAppointment : any []=[];
  public disabled : boolean = false;
  private hourFront : any;
  private test: number = 0;


  constructor(private calendar: NgbCalendar,
              private cdRef: ChangeDetectorRef,
              private element : ElementRef,
              private appoimentservice : AppoinmentService,
              private rendered : Renderer2,
              ) {
        
                  }

  ngAfterViewInit(): void {
 
  }



  // trigger() {
  //  this.element.nativeElement.datetimepicker({
  //     language: 'pt-ES'
  //   });
  // }

  selectedHour(value : string){
    this.hour = parseInt(value);
  }

  private disabledDates:NgbDateStruct[]=[
    {year:2022,month:1,day: this.value}
  ];


  modelDateChange(){

    this.enableHour();
    this.customDate = this.model;
    this.sendDataToBack();

    // if(JSON.stringify(this.model) === JSON.stringify( this.actualDay)){
    //   console.log('desde el modelDateChange: customDate',this.customDate);
    //   console.log('desde el modelDateChange : model',this.model)
    //   this.sendDataToBack();
    // }
  }

  ngAfterViewChecked() {

    this.cdRef.detectChanges();
    // this.customDate = this.model;
    // console.log('custom desde del viewchange',this.customDate);

    // if(this.test == 1){
    // this.modelDateChange();
    // }


    
    // this.hourFront;
    // this.resultAppointment;

  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  objectDateSeleccion(){ 

    const objectHour = {
      hour : this.hour
    }
     Object.assign( this.customDate, objectHour )
    this.sendDataToBack();
  }

  
  

  sendDataToBack ( ) {

    console.log('in sendData',this.customDate);

    this.appoimentservice.sendAppoinmentToBack(this.customDate)
    .subscribe( res => {
       this.resultAppointment = res;

      //  let numberHour = this.resultAppointment.forEach( element => {this.resultAppointment[element] });
      //  console.log(this.resultAppointment)
       this.testDisable();
       console.log('desde la respuesta:',res)
       
      //  this.test = 0;
  

      } )  
   }



  isDisabled=(date:NgbDateStruct )=> {
    //in current we have the month and the year actual
    return this.disabledDates.find(x=>new NgbDate(x.year,x.month,x.day).equals(date))?
         true:false;
  }

  goToLogin( ){
    return this.login;
  }




  ngOnInit(): void {
    this.model = this.calendar.getToday();
    this.actualDay = this.calendar.getToday();
    this.customDate = this.model;
    // if(this.model.day === this.actualDay.day){ console.log('model-actual')}
    this.sendDataToBack();
    // console.log('desde init: customDate',this.customDate);
    // console.log('desde el init : model',this.model)

    // this.test = 1;
    
  }



}
