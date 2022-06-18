import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private signInApi = 'https://the-great-ayurveda-api.herokuapp.com/api/user/signin';
  // https://the-great-ayurveda-api.herokuapp.com/user/signup
  private signUpApi = 'http://the-great-ayurveda-api.herokuapp.com/api/user/signup';
  private verifyApi = 'https://the-great-ayurveda-api.herokuapp.com/api/user/verify';

  constructor(private _http: HttpClient) {}

  socialLogin(user: SocialUser): Observable<any> {
    let socialApi = 'https://the-great-ayurveda-api.herokuapp.com/api/user/login-by-social-media';
    return this._http.post(socialApi, {
      name: user.name,
      email: user.email,
      image: user.photoUrl,
    });
  }

  public signInUser(email: string, password: string): Observable<any> {
    return this._http.post<any>(this.signInApi, {
      email: email,
      password: password,
    });
  }

  public signUpUser(formData: FormData): Observable<any> {
    return this._http.post<any>(this.signUpApi, formData);
  }

  signUpByOtp(userId: string, otp: String) {
    return this._http.post(this.verifyApi, { id: userId, otp: otp });
  }
  checkToken(): boolean {
    return !!localStorage.getItem('jwt-token');
  }
  public checkUser(): boolean {
    return !!sessionStorage.getItem('userId');
  }
  public userDetail() {
    return localStorage.getItem('user');
  }

  public removeUser(uid: string): Observable<any> {
    let api = 'https://the-great-ayurveda-api.herokuapp.com/api/user/remove';
    return this._http.post<any>(api, { id: uid });
  }
  public updateUser(formData: FormData): Observable<any> {
    let api = 'https://the-great-ayurveda-api.herokuapp.com/api/user/updateUser';
    return this._http.post<any>(api, formData);
  }
  public orderHistory(id:string){
    let api='https://the-great-ayurveda-api.herokuapp.com/api/order/viewOrderByUserId'
    return this._http.post<any>(api,{id});
  }
  public viewAppointmentByUid(uId:string):Observable<any>{
    let appointmentApi="https://the-great-ayurveda-api.herokuapp.com/api/appointment/viewAppoimentByUid";
    return this._http.post<any>(appointmentApi,{uId:uId});
  }
  public view():Observable<any>{
    let api='https://the-great-ayurveda-api.herokuapp.com/api/user/view'
    return this._http.get<any>(api)
  }
}
