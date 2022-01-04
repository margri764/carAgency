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
.pipe(
  map( resp => {
     this.resultAppointment = resp.appointmentInDb.map(
       (item:any) => (item.hour)

     );
     return {
      appointment : this.resultAppointment
    };
  }))
};

}

  


// return this.http.get(`${this.baseUrl}api/appoinment`, body)
// .pipe(
//   map ( res => {
//       this.resultAppoinment = res.userName 
//       return { 
//         userName : this.resultAppoinment}

//   })
//   )
// }}
