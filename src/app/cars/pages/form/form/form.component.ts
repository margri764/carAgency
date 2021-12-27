import { Component, OnInit, ChangeDetectorRef, AfterViewChecked, Input, AfterViewInit, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ZeromileCarsService } from 'src/app/cars/services/zeromile-cars.service';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, AfterViewChecked {

  public invalidName:  boolean  = false;
  public invalidPhone: boolean = false;
  public invalidEmail: boolean = false;

  @Input() modelSelection! : string;

  public car : string = '';
  
 
  myForm:FormGroup = this.fb.group({
    name:    ['',Validators.required],
    phone:   ['',Validators.required],
    email:   ['',[Validators.required, Validators.pattern( this.validatorservice.emailPattern)]],
    car:     ['']
  });

    constructor(
              private validatorservice : ValidatorService,
              private zeromileCarservice : ZeromileCarsService,
              private fb : FormBuilder,
              private cdRef:ChangeDetectorRef
      
              ) { }

 

    test(field: string){

      switch( field ) {
        case 'name':
          if ( this.myForm.controls['name'].errors && this.myForm.controls['name'].touched){
           this.invalidName = true;
          }else(this.invalidName = false)
         
           break;
  
        case 'phone':
          if ( this.myForm.controls['phone'].errors && this.myForm.controls['phone'].touched){
            this.invalidPhone = true;
           }else(this.invalidPhone = false)
          break;
  
        case 'email':
          if ( this.myForm.controls['email'].errors && this.myForm.controls['email'].touched){
            this.invalidEmail = true;
           }else(this.invalidEmail = false)
          break;
        default:
      }

    }

    
  validField( field: string ) {
    this.test(field);  
    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched;
  }
  
  onSubmit() {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log("this.car", this.zeromileCarservice.model)
    this.myForm.controls['car'].setValue(this.modelSelection) 
    console.log(this.myForm.value)
  }

  ngOnInit(): void {
  }
 

  ngAfterViewChecked() {
  this.invalidName;
  this.invalidPhone;
  this.invalidEmail;
  this.cdRef.detectChanges();
}

}
