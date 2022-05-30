import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  viewAppoinments:any=[];
   dId:any;
   aId:any;
   date:any;
   time:any;
   userId:any;
   mobile:any;
  
  constructor(private appointments:AppointmentService,private taoster: ToastrService) { 
    this.dId=sessionStorage.getItem('doctorId')
    console.log(this.dId)
  
  }

  ngOnInit(): void {
    this.appointments.pendingAppointment(this.dId).subscribe((data:any)=>{
      console.log(data);
      this.viewAppoinments=data;
    })
  
  }
   public approveAppoint(id:any,uId:any,mobile:any)
   { 
      sessionStorage.setItem("userrId",uId);
      sessionStorage.setItem("apointtId",id);
      sessionStorage.setItem("mobilee",mobile);
        console.log(id,uId,mobile)
  }
 public approve(){
  this.aId = sessionStorage.getItem("apointtId");
  this.userId = sessionStorage.getItem("userrId");
  this.mobile = sessionStorage.getItem("mobilee");
   sessionStorage.removeItem("userrId");
   sessionStorage.removeItem("apointtId");
   sessionStorage.removeItem("mobilee");
  console.log(this.date,this.time,this.aId,this.userId,this.mobile);
  this.appointments.approveAppointment(this.aId,this.userId,this.date,this.time,this.mobile).subscribe((data:any)=>{
    if(data)
    this.taoster.success("Your Appointment is booked ")

    console.log(data);
    this.ngOnInit();
  })
}

public cancleAppointment(userId:any,aId:any,mobile:any){
   confirm("Are you sure ?")
   this.appointments.cancleAppoinment(userId,aId,mobile).subscribe((data:any)=>{
     if(data)
    this.taoster.success("Appointment is canceled ") 
    console.log(data);
    this.ngOnInit()

   })
}

}
