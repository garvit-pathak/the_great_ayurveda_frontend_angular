import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css']
})
export class AppointmentHistoryComponent implements OnInit {
  appiontment:any=[];
  uId:any;
  constructor(private userService:UserService,private spinner : NgxSpinnerService) { 
    this.uId=sessionStorage.getItem("userId")
  }

  ngOnInit(): void {
    this.spinner.show();
    this.userService.viewAppointmentByUid(this.uId).subscribe((data:any)=>{
      this.spinner.hide();
      console.log(data);
      this.appiontment=data;
    })
  }

}
