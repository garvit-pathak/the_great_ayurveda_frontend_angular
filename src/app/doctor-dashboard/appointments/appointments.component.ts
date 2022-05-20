import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  viewAppoinments:any=[];
  //  i:any=0;
   dId:any;
   aId:any;
   date:any;
   time:any;
   userId:any;
   mobile:any;
  constructor(private appointments:AppointmentService) { 
    this.dId=sessionStorage.getItem('doctorId')
    this.appointments.viewAppoinment(this.dId).subscribe((data:any)=>{
      console.log(data);
      this.viewAppoinments=data;
    })
  }

  ngOnInit(): void {
  }
   public approveAppoint(id:any,uId:any,mobile:any)
   { 
            sessionStorage.setItem("userrId",uId);
            sessionStorage.setItem("apointtId",id);
            sessionStorage.setItem("mobilee",mobile);
              // this.aId=id;
              // this.userId=uId;
              // this.mobile=mobile;
              console.log(this.aId,this.userId,this.mobile)
  }
 public approve(){
  this.aId = sessionStorage.getItem("apointtId");
  this.userId = sessionStorage.getItem("userrId");
  this.mobile = sessionStorage.getItem("mobilee");
   sessionStorage.removeItem("userrId");
   sessionStorage.removeItem("apointtId");
   sessionStorage.removeItem("mobilee");

  alert("Your Appoinment is booked ")
  console.log(this.date,this.time,this.aId,this.userId,this.mobile);
  this.appointments.approveAppointment(this.aId,this.userId,this.date,this.time,this.mobile).subscribe((data:any)=>{
    
    console.log(data);
  })
}
public cancleAppointment(userId:any,aId:any,mobile:any){
   this.appointments.cancleAppoinment(userId,aId,mobile).subscribe((data:any)=>{
     console.log(data);
   })
}

}
