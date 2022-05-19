import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
profile:any;
  constructor( private router  :Router ) { }

  ngOnInit(): void {
    this.profile = JSON.parse(localStorage.getItem("doctor") || "" )

  }
  signOut(){
    
      localStorage.removeItem('token');
      localStorage.removeItem("doctor");
      sessionStorage.removeItem('doctorId');
         this.router.navigate([""]);
    
  }

}
