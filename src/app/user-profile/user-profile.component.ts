import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private router :Router) { }
  signout() {
    localStorage.removeItem('token');
    localStorage.removeItem("user");
    sessionStorage.removeItem('userId');
       this.router.navigate([""]);
  }
  ngOnInit(): void {
  }

}
