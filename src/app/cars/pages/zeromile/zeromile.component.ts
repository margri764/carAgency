import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Stepper from 'bs-stepper';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-zeromile',
  templateUrl: './zeromile.component.html',
  styleUrls: ['./zeromile.component.css']
})
export class ZeromileComponent implements OnInit, AfterViewInit, AfterViewChecked {


  public navbarOpen!:boolean;
  triggerNext : string = "";
  triggerPrevious : string = "false";
  public carSelection : string= '';

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  @ViewChild('bsStepper', { static: false }) stepperElement!: ElementRef<any>;

  public stepper!: Stepper;


  constructor( private fb : FormBuilder,
               private cdRef:ChangeDetectorRef
                ) { }

  next() {
    this.stepper.next();
  }

  previous(){
    this.stepper.previous();
  }

  
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
    if(this.triggerNext == "true"){
      this.next()
      this.triggerNext = "false";
      return;
    };
    if(this.triggerPrevious == "true"){
      this.previous();
      this.triggerPrevious = "false"
      return;
    }
  }  


  
  ngOnInit() {}

  ngAfterViewInit() {
    this.stepper = new Stepper(this.stepperElement.nativeElement, {
      linear: false,
      animation: true
    });

  }

  goTo( selection : string){
    this.carSelection = selection;
    alert('Seleccionaste: '+ selection)
  }
}
