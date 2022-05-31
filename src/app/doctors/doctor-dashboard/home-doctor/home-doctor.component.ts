import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-home-doctor',
  templateUrl: './home-doctor.component.html',
  styleUrls: ['./home-doctor.component.css']
})
export class HomeDoctorComponent implements OnInit {
  viewAppoinments:any=[];
  dId:any
  constructor(private appointments:AppointmentService,private taoster: ToastrService) { 
    this.dId=sessionStorage.getItem('doctorId')
  }

  ngOnInit(): void {
    this.appointments.viewAppoimentByDid(this.dId).subscribe((data:any)=>{
      console.log(data);
      this.viewAppoinments=data;
    })
  }

}
