import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor(private http: HttpClient) {}

  public doctorSingup(formData: FormData): Observable<any> {
    let up = 'http://localhost:8801/api/doctor/add';
    return this.http.post<any>(up, formData);
  }

  public otpcheck(id: string, tp: string): Observable<any> {
    let otp = 'http://localhost:8801/api/doctor/verifyDoctor';
    return this.http.post<any>(otp, { id: id, otp: tp });
  }

  public signinDoctor(email: string, password: string): Observable<any> {
    let sign = 'http://localhost:8801/api/doctor/signin';
    return this.http.post<any>(sign, { email: email, password: password });
  }

  public view(): Observable<any> {
    let View = 'http://localhost:8801/api/doctor/viewAllDoctor';
    return this.http.get<any>(View);
  }

  public categoryView(): Observable<any> {
    let cat = 'http://localhost:8801/api/category/view';
    return this.http.get<any>(cat);
  }
}
