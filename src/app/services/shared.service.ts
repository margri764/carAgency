import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

 public scrollTrigger : boolean = false; 
  constructor() { }
}
