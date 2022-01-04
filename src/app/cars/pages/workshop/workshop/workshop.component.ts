import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs';
import { AppoinmentService } from 'src/app/services/appoinment/appoinment.service';


// interface customDate{
//     year: number,
//     month: number,
//     day : number
// }

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})


export class WorkshopComponent implements OnInit, AfterViewChecked, AfterViewInit {

  @ViewChild ('datetimepicker1') datetimepicker1! :ElementRef;
  
  @ViewChild ('10') hour10! :ElementRef ;

  testDisable(){
    if(this.hour10.nativeElement.id == this.hourFront)
    this.rendered.setProperty(this.hour10.nativeElement,"disabled","true")
  }
  

  public model!: NgbDateStruct;
  public date!: {year: number, month: number};
  private customDate : any = {};
  private value : number= 24;
  disabledDates:NgbDateStruct[]=[
    {year:2021,month:12,day: this.value}
  ];
  private hour!: number;
  public login : string = '';
  public resultAppointment : any []= [];
  public disabled : boolean = false;
  private hourFront : any;
  private test: any =[];

  constructor(private calendar: NgbCalendar,
              private cdRef:ChangeDetectorRef,
              private element : ElementRef,
              private appoimentservice : AppoinmentService,
              private rendered : Renderer2,
              ) {
  }
  ngAfterViewInit(): void {
 
 

  }

  trigger() {
   this.element.nativeElement.datetimepicker({
      language: 'pt-ES'
    });
  }

  selectedHour(value : string){
    
    this.hour = parseInt(value);

    // switch( value ){ 
    //   case '8' :
    //    break;
      
    //   case '9': 
    //   break;

    //   case '10': 
    //   console.log(value, this.hourFront)

    //       if(value == this.hourFront){this.disabled = true}
       
            
    //  break;
     
    //  case '11': 
    //  break;
  
    // }
  }



  ngAfterViewChecked() {
    this.cdRef.detectChanges();
    this.customDate=this.model;
    this.hourFront;
    // if(this.hourFront!= undefined){
    //   this.disablehour(this.test)
    // }

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

  disablehour( value: string){
    // console.log('pressed')

    switch( value ){ 
      case '8' :
       break;
      
      case '9': 
      break;

      case '10': 
      console.log('pressed')
          if(value == this.hourFront){this.disabled = true}
       
            
     break;
     
     case '11': 
     break;
  
    }

  }

    // this.sendDataToBack();


    // this.customDate=this.customDate ={ 
    //        ['hour']: this.hour
    // };
     // const {year, month, day} = this.customDate;
    // let selectDate = year.toString() +  month.toString() + day.toString() + this.hour;
    // // this.selectedHour(this.hourvalue);
    // alert(this.customDate)
   
    // if( selectDate === '20211211'){
    //   alert('ok')
    // }
  

  sendDataToBack ( ) {
    this.appoimentservice.sendAppoinmentToBack(this.customDate)
    .subscribe( ({appointment}) => {
       this.resultAppointment = appointment;
       console.log(this.resultAppointment)
      } )  
   }

   // this.hourFront = res;
      //         this.hourFront= this.hourFront.hour
      //         console.log(this.hourFront)
      //           this.testDisable();

  isDisabled=(date:NgbDateStruct )=> {
    //in current we have the month and the year actual
    return this.disabledDates.find(x=>new NgbDate(x.year,x.month,x.day).equals(date))?
         true:false;
  }

  goToLogin( ){
    return this.login;
  }


  ngOnInit(): void {
    // this.isDisabled(this.value);
    this.model = this.calendar.getToday();
    // this.testDisable();
    
  }



}
