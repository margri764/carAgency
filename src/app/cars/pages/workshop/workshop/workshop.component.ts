import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AppoinmentService } from 'src/app/services/appoinment/appoinment.service';
import * as moment from 'moment';
moment.locale('es');
import { Appoinment } from 'src/app/cars/models/appoinment.models';


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


//   testMoment(){
//   const format = 'dddd D MMMM YYYY';
//   const today = moment();
//   const yesterday = today.clone().subtract( 1, 'days')
//   const tomorrow = moment().add( 1, 'days')
//   const exactDayOne = moment('2020-10-21')
//   const exactDayTwo = moment([2020,0]);

//   const dayInMonth = moment([2022,2]).daysInMonth();


//   console.table ({
//     today: today.format( format),
//     yesterday: yesterday.format(format),
//     tomorrow : tomorrow.format (format),
//     exactDayOne: exactDayOne.format (format),
//     exactDayTwo: exactDayTwo.format(format),
//     mayor: (today > yesterday)? true : false,
//     dayInMonth,

//   })



// }

  testDisable(){   
    
    this.resultAppointment.map(booking => ({
      ...booking,
      hour: booking.hour = (this.disableHour(booking.hour)),
      // day:  booking.day = (this.countDisableDays(booking.day)) 
    
    })
    );
  }



countDisableDays(){

  // this.arrayForDisableDays();
  let arrayDays : any =[];
  let arraySortDays : any =[];

  // console.log(this.resultAppointment)
  // console.log('newObjectDay: ',this.newObjectDay)
 
    this.newObjectDay.map( (item: any) =>{
    
      arrayDays.push(item.day);
      arraySortDays = arrayDays.sort( )
      // arraySortDays = arrayDays.sort( (d1:any, d2:any) =>(d1-d2) )
  });
  //  console.log('lista ordenada: ',arraySortDays)
  const specimens = arraySortDays.filter((number: any, i: any) => i == 0 ? true : arraySortDays[i - 1] != number);
const counterSpecimens = specimens.map((spec: any) => {
    return {number: spec, count: 0};
});

counterSpecimens.map((countSpec: { number: any; count: any; }, i: any) =>{
    const actualSpecLength = arraySortDays.filter((number: any) => number === countSpec.number).length;
    countSpec.count = actualSpecLength;
})

let tempArray:any=[];
let filterDay : any;

// console.log('newObjectDay: ',this.newObjectDay)
// console.log( 'counterSpeci: ' ,counterSpecimens)

 counterSpecimens.map( (item:any) =>{
    if(item.count === 5){
      // tempArray.push(filterDay))
      tempArray.push(this.newObjectDay.filter( (value:any) => value.day === item.number));
      //  tempArray.push(filterDay)

    } 
  
});
    tempArray.map((i:any)=>{ this.dateToDisable.push(i[0])})

// console.log('tempArray',this.dateToDisable)


}

arrayForDisableDays(){
  let temporaryObject : any;
  this.resultAppointment.map( item => (
      
    temporaryObject = {
      year: parseInt(item.year),
      month: parseInt(item.month),
      day: parseInt(item.day)  
   },

  this.newObjectDay.push(temporaryObject)
  )
  )
// console.log(this.newObjectDay)
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
  private disableDay : string = '';
  public isDisabled :any;
  private newObjectDay : any = [];
  private dateToDisable : any = [];



  constructor(private calendar: NgbCalendar,
              private cdRef: ChangeDetectorRef,
              private element : ElementRef,
              private appoimentservice : AppoinmentService,
              private rendered : Renderer2,
              ) {
        
                  }

  ngAfterViewInit(): void {
    // this.isDisabled(this.date)


  }


  // trigger() {
  //  this.element.nativeElement.datetimepicker({
  //     language: 'pt-ES'
  //   });
  // }

  selectedHour(value : string){
    this.hour = parseInt(value);
  }

  public change(el : any,dael : any){
    dael.open();
    setTimeout(function(){
      console.log(el);
      el.focus()
    },500);
  
  }
  modelDateChange(){
    console.log('pressed')
    this.enableHour();
    this.customDate = this.model;
    this.sendDataToBack();
  }

  ngAfterViewChecked() {
    // this.isDisabled;

   
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

    // console.log('in sendData',this.customDate);

    this.appoimentservice.sendAppoinmentToBack(this.customDate)
    .subscribe( res => {
       this.resultAppointment = res;

      //  console.log(this.resultAppointment)
       this.testDisable();
  
   
       
      //  console.log('desde la respuesta:',res)
       
      //  this.test = 0;
  

      } )  
   }

  //  private disabledDates:NgbDateStruct[]=[
  //   { year:2022, month:1, day: parseInt(this.disableDay)}
  // ];


te(){  this.isDisabled=(date:NgbDateStruct )=> {


      const dateToDisable :any [] = this.dateToDisable


        // { year:2022, month:1, day: parseInt(this.disableDay)}
      // console.log('disableDay desde isDisabled: ',this.disableDay);
    //in current we have the month and the year actual
    return dateToDisable.find((x: { year: number; month: number; day: number; })=>new NgbDate(x.year,x.month,x.day).equals(date))?
         true:false;
  }
}

  goToLogin( ){
    return this.login;
  }

  searchFullDateToDisable(){
    // (this.disableHour(booking.hour))

    // this.resultAppointment.map(booking => ({
    //   ...booking,
    
    //   year: booking.year == this.date.year, 
    //   hour: booking.hour = 
    // }));

  }



  getAppointment(){
  this.appoimentservice.getAppoinmentFromBack().subscribe(
    res=>{ this.resultAppointment = res;

      this.arrayForDisableDays();
      this.countDisableDays();
      this.te();

      // if(this.resultAppointment.length == 18){
      // this.disableDay = '9';
      
      // this.te();
      // }
      // console.log(this.resultAppointment)

      // if(this.resultAppointment.length==18){ 
      //   this.resultAppointment.map( date => this.disableDay = date.day)
      //    console.log('disableDay desde el viewChecked: ',this.disableDay);
      //    console.log('resultAppointment desde el viewChecked: ',this.resultAppointment.length)
  
      //   }
  
    })
  }

  ngOnInit(): void {
    // console.log('init')
 
    this.getAppointment();


    this.model = this.calendar.getToday();
    this.actualDay = this.calendar.getToday();
    this.customDate = this.model;
    this.sendDataToBack();
    setTimeout(() => {
     
    }, 3000);
  }



}
