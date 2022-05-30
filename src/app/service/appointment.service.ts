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
  public viewAppoinment(dId:any):Observable<any>{
    let viewAppoinments="http://localhost:8801/api/appointment/viewAppoimentByDid";
    return this.http.post(viewAppoinments,{dId:dId});
  }
  public approveAppointment(aId:any,userId:any,date:any,time:any,mobile:any):Observable<any>{
    let approve="http://localhost:8801/api/appointment/acceptAppointment";
    return this.http.post(approve,{aId:aId,uId:userId,date:date,time:time,mobile:mobile});
  }
  public cancleAppoinment(uId:any,aId:any,mobile:any):Observable<any>{
    let cancle="http://localhost:8801/api/appointment/cancleAppointment";
    return this.http.post(cancle,{uId:uId,aId:aId,mobile:mobile});

  }
  public pendingAppointment(dId:string):Observable<any>{
    let pending="http://localhost:8801/api/appointment/viewAppointmentByDidPending";
    return this.http.post(pending,{dId:dId});
  }
  public viewAppoimentByDid(dId:string):Observable<any>{
    let api="http://localhost:8801/api/appointment/viewAppoimentByDid"
    return this.http.post(api,{dId:dId});
  }
  
}
