import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../../model/appointment';
import { AppointmentService } from '../../service/appointment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css'],
})
export class BookAppointmentComponent implements OnInit {
  appointMent: Appointment = new Appointment('', '', '', '', '', '', '');
  constructor(
    private _app: AppointmentService,
    private activateRouter: ActivatedRoute,
    private taoster: ToastrService,
    private router:Router
  ){
    let uid = sessionStorage.getItem('userId');
    console.log(uid);
    this.appointMent.userId = <string>uid;
    this.appointMent.doctorId = <string>(
      this.activateRouter.snapshot.paramMap.get('id')
    );
  }

  ngOnInit(): void {}

  public add() {
    this._app.appointment(this.appointMent).subscribe(
      (data) => {
        console.log(data);
        if (data) {
          this.taoster.success('Appointment Compelete');
          this.router.navigate(['']);
        }
        // this.taoster.success('Not Complete')
      },
      (err) => {
        console.log(err);
        if (err) this.taoster.error('Not Complete');
      }
    );
  }
}
