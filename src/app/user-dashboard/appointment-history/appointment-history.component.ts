import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css']
})
export class AppointmentHistoryComponent implements OnInit {
  appiontment:any=[];
  uId:any;
  constructor(private userService:UserService) { 
    this.uId=sessionStorage.getItem("userId")
  }

  ngOnInit(): void {
    this.userService.viewAppointmentByUid(this.uId).subscribe((data:any)=>{
      console.log(data);
      this.appiontment=data;
    })
  }

}
