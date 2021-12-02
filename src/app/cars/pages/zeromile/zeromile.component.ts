import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Stepper from 'bs-stepper';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-zeromile',
  templateUrl: './zeromile.component.html',
  styleUrls: ['./zeromile.component.css']
})
export class ZeromileComponent implements OnInit, AfterViewInit {


  // myForm:FormGroup = this.fb.group({
  //   name:    ['',[Validators.required]],
  //   phone:   ['',Validators.required],
  //   email:   ['',[Validators.required, Validators.pattern( this.validatorservice.emailPattern)]],
  //   message :['']
  //   });
    

  @ViewChild('bsStepper', { static: false }) stepperElement!: ElementRef<any>;

  public stepper!: Stepper;


  constructor( private fb : FormBuilder,
                // private validatorservice : ValidatorService 
                ) { }

  next() {
    this.stepper.next();
  }

  previous(){
    this.stepper.previous();
  }

  
  // onSubmit() {
  //   console.log(this.myForm.value)
  // }
  
  // validField( field: string ) {

  //   return this.myForm.controls[field].errors 
  //           && this.myForm.controls[field].touched;
  // }

  
  ngOnInit() {}

  ngAfterViewInit() {
    this.stepper = new Stepper(this.stepperElement.nativeElement, {
      linear: false,
      animation: true
    });

  }
}
