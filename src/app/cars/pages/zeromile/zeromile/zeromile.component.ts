import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import Stepper from 'bs-stepper';


@Component({
  selector: 'app-zeromile',
  templateUrl: './zeromile.component.html',
  styleUrls: ['./zeromile.component.css']
})
export class ZeromileComponent implements OnInit, AfterViewInit, AfterViewChecked {


  public navbarOpen!:boolean;
  triggerNext : string = "";
  triggerPrevious : string = "false";
  public brandSelection : string= '';
  public modelSelection : string= '';
  public disabledBrand : boolean = true;
  public disabledModel : boolean = true;
  public stepper!: Stepper;
  public element : any;
  public carSelect : string='';


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  @ViewChild('bsStepper', { static: false }) stepperElement!: ElementRef<any>;
  @ViewChild('container', { static: false }) container!: ElementRef;




  constructor( 
               private cdRef:ChangeDetectorRef,
                ) { }

  next() {
    this.stepper.next();
  }

  previous(){
    this.stepper.previous();
  }


  ngAfterViewChecked() {

    if(this.triggerNext == "true"){
      this.next()
      this.triggerNext = "false";
    };
    if(this.triggerPrevious == "true"){
      this.previous();
      this.triggerPrevious = "false"
    };
 
    if(this.brandSelection != ''){
      this.disabledBrand = false
    };
    if(this.modelSelection != ''){
      this.disabledModel = false;
    };
    this.cdRef.detectChanges();

  }  


  
  ngOnInit() {

  }

  ngAfterViewInit() {

    this.stepper = new Stepper(this.stepperElement.nativeElement, {
      linear: false,
      animation: true
    });
    
    this.element = this.container.nativeElement;

    setTimeout( () => {

      this.element.scrollIntoView(
        { alignToTop: true,
          behavior: "smooth",
          block: "center",
        });
        }, 0);


  }

  goToBrand( brandSelect : string){
    this.brandSelection = brandSelect;
  }

  goToModel( modelSelect : string){
    this.modelSelection = modelSelect;
  }
}
