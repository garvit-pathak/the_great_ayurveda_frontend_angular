import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { threadId } from 'worker_threads';
import { DoctorService } from '../service/doctor.service';
@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
profile:any;
id:any;
appointment:any=[];
oneDoctor:any;
name:any;
email:any;
image:any;
clinicName:any;
clinicAddress:any;
clinicNo:any;
clinicTiming:any;

  constructor( private router  :Router,private doctorprofile:DoctorService,private taoster: ToastrService) { 
    this.id=sessionStorage.getItem('doctorId');
    this.doctorprofile.viewOneDoctor(this.id).subscribe((data:any)=>{
     console.log(data);    
       this.name=data.name
       this.email=data.email
       this.clinicAddress=data.clinicAddress
       this.clinicName=data.clinicName
       this.clinicNo=data.clinicNo
       this.clinicTiming=data.clinicTiming
       this.image=data.image
    })
  }

  ngOnInit(): void {
    this.profile = JSON.parse(localStorage.getItem("doctor") || "" )

  }
  signOut(){
    
      localStorage.removeItem('token');
      localStorage.removeItem("doctor");
      sessionStorage.removeItem('doctorId');
         this.router.navigate([""]);
    
  }
  remove(){
    confirm("confirm")
    this.doctorprofile.removeAccount(this.id).subscribe((data:any)=>{
      console.log(data)
      if(data)
      this.taoster.success("Remove Your Account")
    })

    localStorage.removeItem('token');
    localStorage.removeItem("doctor");
    sessionStorage.removeItem('doctorId');
       this.router.navigate([""]);
  }

  appointmentView(){
    this.doctorprofile.viewAppointment(this.id).subscribe((data:any)=>{
      console.log(data);
      this.appointment=data;
    })
  }
  updateDoctor(){
    let formdata=new FormData();
    formdata.append('id',this.id);
    formdata.append('name',this.name);
    formdata.append('email',this.email);
    formdata.append('clinicName',this.clinicName);
    formdata.append('clinicAddress',this.clinicAddress);
    formdata.append('clinicNo',this.clinicNo);
    formdata.append('clinicTiming',this.clinicTiming);
    formdata.append('oldImage',this.image);
    console.log("UPDATE:"+this.id+" "+this.name+" "+this.email+" "+this.clinicName+" "+this.clinicAddress+" "+this.clinicNo+" "+this.clinicTiming)
    this.doctorprofile.updateDoctor(formdata).subscribe((data:any)=>{
      console.log(data)
       if(data.result){
         this.taoster.success('Update Success');
         localStorage.removeItem('token');
         localStorage.removeItem("doctor");
         sessionStorage.removeItem('doctorId');
            this.router.navigate([""]);
       }
    })
  }


}
