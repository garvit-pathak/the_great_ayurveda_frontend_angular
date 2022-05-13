import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/appointment';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  appointMent:Appointment = new Appointment('','','','','','');
  constructor(private _app:AppointmentService,) {
    let uid=sessionStorage.getItem('userId') ;
     console.log(uid);
     this.appointMent.userId=<string>uid;
  }

     

  ngOnInit(): void {
  }
 
  public add(){
    this._app.appointment(this.appointMent).subscribe(data=>{
      console.log(data)
    })
  }
}
