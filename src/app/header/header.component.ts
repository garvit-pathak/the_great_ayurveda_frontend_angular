import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from 'src/app/model/user';
import { ToastrService } from 'ngx-toastr';

import { DoctorService } from '../service/doctor.service';
import { HostListener } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userProfile:any;
  
  name: string = '';
  email: string = '';
  mobile: string = '';
  password: string = '';
  image: any;
  uid: any;
  uotp: string = '';

  dname = '';
  demail = '';
  dpassword = '';
  dexprience = '';
  dcategory = '';
  dclinicName = '';
  dclinicAddress = '';
  dclinicNo = '';
  dclinicTiming = '';
  dmobile = '';
  dimage = '';
  ddegree = '';
  dotp = '';
  did = '';

  value:any;
  scrHeight:any;
  scrWidth:any;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event:any) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        
        if(this.scrWidth>=768)
          this.value=false;
        else  
          this.value = true;
  }
  // constructor(
  //   private _userService: UserService,
  //   private _doctorService: DoctorService
  // ) {
  
  // }


  catList: any = [];

  constructor(
    private _userService: UserService,
    private _doctorService: DoctorService,
    private taoster: ToastrService,
    private router : Router
  ) {
    let id = document.querySelectorAll("#menu");
    console.log(id);
    this._doctorService.categoryView().subscribe((data) => {
      console.log(data);
      this.catList = data;
    });
  }
  get(event:any) {
    this.dcategory = event.target.value;
    alert(this.dcategory)

  }

  ngOnInit(): void {}

  userIsLoggedIn(){
    if(this._userService.checkUser()){
      this.userProfile = JSON.parse(this._userService.userDetail()|| " ");

      return true;
    }
    return false;
  }


  public signInUser() {
    this._userService.signInUser(this.email, this.password).subscribe(
      (data) => {
        console.log(data);
        // alert('successfull logined');
        // sessionStorage.setItem('token',data.token);
        localStorage.setItem('jwt-token',data.token)
        
        if(data)
        this.taoster.success('Login Success', 'Success');

        sessionStorage.setItem('userId', data.result._id);
         localStorage.setItem("user",JSON.stringify(data.result));

      },
      (err) => {
        console.log(err);
        this.taoster.error('somethink went wrong');
      }
    );
  }
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      this.image = event.target.files[0];
      console.log(this.image);
    }
  }

  public sendOtp() {
    let formData = new FormData();
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('password', this.password);
    formData.append('mobile', this.mobile);
    formData.append('image', this.image);
    this._userService.signUpUser(formData).subscribe((data) => {
      console.log(data);
      console.log(data.result.otp);
      this.uid = data.result._id;
      
    });
  }


   navbar:any="";
menu:any="";
  public nav(navbar:any){
    navbar.classList.toggle('active');
  } 
  public menue(menu:any){
   this.navbar = document.querySelector('.navbar');

   menu.classList.toggle('fa-times');
   this.navbar.classList.toggle('active');

 }

  checkOtp() {
    this._userService.signUpByOtp(this.uid, this.uotp).subscribe((data) => {
      console.log(data);
      if (data) this.taoster.success('SignUp Success', 'Success');
      
        
    });
  }

  selectimage(event: any) {
    if (event.target.files.length > 0) {
      this.dimage = event.target.files[0];
      console.log(this.image);
    }
  }

  doctorSingup() {
    let formData = new FormData();
    formData.append('exprience', this.dexprience);
    formData.append('name', this.dname);
    formData.append('email', this.demail);
    formData.append('password', this.dpassword);
    formData.append('mobile', this.dmobile);
    formData.append('category', this.dcategory);
    formData.append('clinicName', this.dclinicName);
    formData.append('clinicAddress', this.dclinicAddress);
    formData.append('clinicNo', this.dclinicNo);
    formData.append('clinicTiming', this.dclinicTiming);
    formData.append('image', this.dimage);
    formData.append('degree', this.ddegree);

    this._doctorService.doctorSingup(formData).subscribe((data) => {
      console.log(data);
      this.dotp = data.otp;
      this.did = data._id;
      console.log(this.did + ' ' + this.dotp);
      if (data) this.taoster.success('SignUp Success', 'Success');
    });
  }

  doctorVerify() {
    this._doctorService.otpcheck(this.did, this.dotp).subscribe((data) => {
      console.log(data);
      if (data) this.taoster.success('SignUp Success', 'Success');
    });
  }

  
  doctorSignin() {
    this._doctorService
      .signinDoctor(this.email, this.password)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['doctor-dasboard']);

         sessionStorage.setItem('doctorId', data.result._id);
         localStorage.setItem('doctor',JSON.stringify(data.result));
        if(data)
        this.taoster.success('Login Success', 'Success');
      });
  }
  checkToken():boolean{
    return !!localStorage.getItem('jwt-token')
  }
}
