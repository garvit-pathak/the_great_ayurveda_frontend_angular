import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private signInApi = 'http://localhost:8801/api/user/signin';
  private signUpApi = 'http://localhost:8801/api/user/signup';
  private verifyApi = 'http://localhost:8801/api/user/verify';

  constructor(private _http: HttpClient) {}


  socialLogin(user:SocialUser):Observable<any>{
    let socialApi = "http://localhost:8801/api/user/login-by-social-media";
    return this._http.post(socialApi,{name : user.name,email : user.email,image : user.photoUrl})
  }

  public signInUser(email:string,password:string): Observable<any> {
    return this._http.post<any>(this.signInApi,{email:email,password:password});
  }

  public signUpUser(formData: FormData): Observable<any> {
    return this._http.post<any>(this.signUpApi, formData);
  } 

  signUpByOtp( userId: string,otp: String,) {
    return this._http.post(this.verifyApi, {  id: userId,otp: otp, });
  }
  checkToken():boolean{
    return !!localStorage.getItem('jwt-token')
  }
  public checkUser():boolean{
    return !!sessionStorage.getItem('userId');

  }
  public userDetail(){
    return localStorage.getItem('user');
  }
}
