import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userDetail: any;
  uid: any;
  name: any;
  image: any;
  email: any;
  mobile: any;
  newImage: any;
  constructor(
    private router: Router,
    private user: UserService,
    private taoster: ToastrService
  ) {
    this.uid = sessionStorage.getItem('userId');
  }

  signout() {
    localStorage.removeItem('jwt-token');
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    sessionStorage.removeItem('userId');
    this.router.navigate(['']);
  }
  ngOnInit(): void {
    this.userDetail = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.userDetail);
    this.name = this.userDetail.name;
    this.image = this.userDetail.image;
    this.email = this.userDetail.email;
    this.mobile = this.userDetail.mobile;
  }
  remove() {
    confirm('confirm');
    this.user.removeUser(this.uid).subscribe((data) => {
      console.log(data);
      if (data) this.taoster.success('Remove Your Account');
    });

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('userId');
    this.router.navigate(['']);
  }

  // userUpdate() {
  //   this.name = this.userDetail.name;
  //   this.image = this.userDetail.image;
  //   this.email = this.userDetail.email;
  //   this.mobile = this.userDetail.mobile;
  // }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      this.newImage = event.target.files[0];
      console.log(this.newImage);
    }
  }

  public update() {
    let formData = new FormData();
    formData.append('id', this.uid);
    formData.append('email', this.email);
    formData.append('name', this.name);
    formData.append('oldImage', this.image);
    formData.append('image', this.newImage);
    this.user.updateUser(formData).subscribe((data) => {
      // console.log(data);
      if (data) this.taoster.success('Successfully Update');
      localStorage.removeItem('jwt-token');
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
      sessionStorage.removeItem('userId');
      this.router.navigate(['']);
    });
  }
}
//jaya