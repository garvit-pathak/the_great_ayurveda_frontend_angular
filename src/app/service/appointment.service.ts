import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  public appointment(add:Appointment): Observable<any>{
    let app='http://localhost:8801/api/appointment/bookappointment';
    return this.http.post(app,add)
  }
}
