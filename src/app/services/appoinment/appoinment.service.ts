import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {

  private baseUrl: string = environment.baseUrl;
  public resultAppointment : any []=[];
  test:any;

  constructor( private http : HttpClient) { }


sendAppoinmentToBack (body : any){

  return this.http.post<any>(`${this.baseUrl}api/appointment`, body)
   }

  
getAppoinmentFromBack (){

  return this.http.get<any>(`${this.baseUrl}api/appointment`)
   }

  }


