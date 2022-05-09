import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {User} from 'src/app/model/user'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:User = new User("","","","");
  name:string="";
  email:string="";
  mobile:string="";
  password:string="";
  image:any;
  id:any;
  otp:string="";
  
  otp1:any;
  tempOtp:any;

  constructor( private _userService:UserService) { }

  ngOnInit(): void {

  }

  public signInUser(){
  this._userService.signInUser(this.user).subscribe(data=>{
    console.log(data);
    alert("successfull logined");
  },err=>{
    console.log(err);
  })
  }
  selectImage(event:any){
    if(event.target.files.length>0){
      this.image = event.target.files[0];
      console.log(this.image);
    }
  }

  public sendOtp(){
    let formData = new FormData();
    formData.append("name",this.name);
    formData.append("email",this.email);
    formData.append("password",this.password);
    formData.append("mobile",this.mobile);
    formData.append("image",this.image);
    this._userService.signUpUser(formData).subscribe(data=>{
      console.log(data);
      console.log(data.result.otp)
      this.otp1=data.result.otp;
      this.id = data.result._id;
    });

  }

 

  checkOtp(){
    // this._userService.signUpByOtp(this.otp,this.id).subscribe(data=>{
    //   console.log(data);
    //   if(this.otp==this.tempOtp){
    //   alert("signupsuccess");

    //    localStorage.setItem("user",JSON.stringify(data));
    //   }
    // })

    if(this.otp1==this.tempOtp){
      alert("signupsuccess");
     
  }else {
    console.log("denied");
  }
  }
}
