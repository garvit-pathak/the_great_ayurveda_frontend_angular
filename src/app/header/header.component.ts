import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from 'src/app/model/user';
import { DoctorService } from '../service/doctor.service';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: User = new User('', '', '', '');
  name: string = '';
  email: string = '';
  mobile: string = '';
  password: string = '';
  image: any;
  id: any;
  otp: string = '';

  otp1: any;
  tempOtp: any;

  dname = '';
  demail = '';
  dpassword = '';
  dexprience = '';
  dcategory = '627b431a52fbcda0b8a5dd7e';
  dspecialities = '';
  dclinicName = '';
  dclinicAddress = '';
  dclinicNo = '';
  dclinicTiming = '';
  dkeyword = '';
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
  constructor(
    private _userService: UserService,
    private _doctorService: DoctorService
  ) {
    let id = document.querySelectorAll("#menu");
    console.log(id);
  }

  ngOnInit(): void {}

  check(){
    
  }

  public signInUser() {
    this._userService.signInUser(this.user).subscribe(
      (data) => {
        console.log(data);
        alert('successfull logined');
      },
      (err) => {
        console.log(err);
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
      this.otp1 = data.result.otp;
      this.id = data.result._id;
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
//  window.onscroll = ():any =>{
//   this.menu = document.querySelector('#menu-btn');
//    this.navbar = document.querySelector('.navbar');
//   this.menu.classList.remove('fa-times');
//   this.navbar.classList.remove('active');
// }
  checkOtp() {
    // this._userService.signUpByOtp(this.otp,this.id).subscribe(data=>{
    //   console.log(data);
    //   if(this.otp==this.tempOtp){
    //   alert("signupsuccess");

    //    localStorage.setItem("user",JSON.stringify(data));
    //   }
    // })

    if (this.otp1 == this.tempOtp) {
      alert('signupsuccess');
    } else {
      console.log('denied');
    }
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
    formData.append('specialities', this.dspecialities);
    formData.append('clinicName', this.dclinicName);
    formData.append('clinicAddress', this.dclinicAddress);
    formData.append('clinicNo', this.dclinicNo);
    formData.append('clinicTiming', this.dclinicTiming);
    formData.append('keyword', this.dkeyword);
    formData.append('image', this.dimage);
    formData.append('degree', this.ddegree);

    this._doctorService.doctorSingup(formData).subscribe((data) => {
      console.log(data);
      // console.log(data.result.otp);
      this.dotp = data.otp;
      this.did = data._id;
      console.log(this.did + ' ' + this.dotp);
      if (data) alert('registretion success' + this.did + ' ' + this.dotp);
    });
  }

  doctorVerify() {
    this._doctorService.otpcheck(this.did, this.dotp).subscribe((data) => {
      console.log(data);
      if (data) alert('registretion success' + this.did + ' ' + this.dotp);
    });
  }
  doctorSignin() {
    this._doctorService
      .signinDoctor(this.email, this.password)
      .subscribe((data) => {
        console.log(data);
        if (data) alert('signin success');
      });
  }
}
