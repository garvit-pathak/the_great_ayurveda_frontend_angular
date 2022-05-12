import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private signInApi = 'http://localhost:8800/api/user/signin';
  private signUpApi = 'http://localhost:8800/api/user/signup';
  private verifyApi = 'http://localhost:8800/api/user/verify';

  constructor(private _http: HttpClient) {}

  public signInUser(user: User): Observable<any> {
    return this._http.post<any>(this.signInApi, user);
  }

  public signUpUser(formData: FormData): Observable<any> {
    return this._http.post<any>(this.signUpApi, formData);
  }

  signUpByOtp(otp: String, userId: string) {
    return this._http.post(this.verifyApi, { otp: otp, id: userId });
  }
}
