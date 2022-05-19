import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 userDetail : any;
 uid:any;
  constructor(private router :Router,private user:UserService,private taoster: ToastrService,) { 
    this.uid=localStorage.getItem("userId")
  }


  signout() {
    localStorage.removeItem('token');
    localStorage.removeItem("user");
    sessionStorage.removeItem('userId');
       this.router.navigate([""]);
  }
  ngOnInit(): void {
    this.userDetail = JSON.parse(localStorage.getItem("user") || "");

  }
  remove(){
    confirm("confirm")
    this.user.removeUser(this.uid).subscribe(data=>{
      console.log(data)
      if(data)
       this.taoster.success('remove success full');
       localStorage.removeItem('token');
    localStorage.removeItem("user");
    sessionStorage.removeItem('userId');
       this.router.navigate([""]);
    })
  }

}
