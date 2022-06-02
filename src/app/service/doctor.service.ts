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
    let up = 'https://the-great-ayurveda-api.herokuapp.com/api/doctor/add';
    return this.http.post<any>(up, formData);
  }

  public otpcheck(id: string, tp: string): Observable<any> {
    let otp = 'https://the-great-ayurveda-api.herokuapp.com/api/doctor/verifyDoctor';
    return this.http.post<any>(otp, { id: id, otp: tp });
  }

  public signinDoctor(email: string, password: string): Observable<any> {
    let sign = 'https://the-great-ayurveda-api.herokuapp.com/api/doctor/signin';
    return this.http.post<any>(sign, { email: email, password: password });
  }

  public view(): Observable<any> {
    let View = 'https://the-great-ayurveda-api.herokuapp.com/api/doctor/viewAllDoctor';
    return this.http.get<any>(View);
  }
  public details(doctorId: string): Observable<any> {
    let viewByID = 'https://the-great-ayurveda-api.herokuapp.com/api/doctor/viewOneDoctor';
    return this.http.post<any>(viewByID, { doctorId: doctorId });
  }
  public categoryView(): Observable<any> {
    let cat = 'https://the-great-ayurveda-api.herokuapp.com/api/category/view';
    return this.http.get<any>(cat);
  }
  public checkDoctor(): boolean {
    return !!sessionStorage.getItem('doctorId');
  }
  public doctorDetail() {
    return localStorage.getItem('doctor');
  }
  public reviewDoctor(
    uid: string,
    did: string,
    review: string
  ): Observable<any> {
    let api = 'https://the-great-ayurveda-api.herokuapp.com/api/doctor/review';
    return this.http.post<any>(api, { uId: uid, dId: did, reviewText: review });
  }
  public removeAccount(id: any): Observable<any> {
    let removeApi = 'https://the-great-ayurveda-api.herokuapp.com/api/doctor/remove';
    return this.http.post<any>(removeApi, { id: id });
  }
  public viewAppointment(dId: any): Observable<any> {
    let viewAppointmentApi =
      'https://the-great-ayurveda-api.herokuapp.com/api/appointment/viewAppoimentByDid';
    return this.http.post<any>(viewAppointmentApi, { dId: dId });
  }
  public viewOneDoctor(doctorId: any): Observable<any> {
    let viewOneDoctor = 'https://the-great-ayurveda-api.herokuapp.com/api/doctor/viewOneDoctor';
    return this.http.post<any>(viewOneDoctor, { doctorId: doctorId });
  }
  public updateDoctor(formData: FormData): Observable<any> {
    let updateDoctorApi = 'https://the-great-ayurveda-api.herokuapp.com/api/doctor/updateDoctor';
    return this.http.post<any>(updateDoctorApi, formData);
  }

  public viewReview(id: string): Observable<any> {
    let api = 'https://the-great-ayurveda-api.herokuapp.com/api/doctor/viewReviewbyDid';
    return this.http.post<any>(api, { dId: id });
  }
  public searchDoc(speciality: any): Observable<any> {
    let api = 'https://the-great-ayurveda-api.herokuapp.com/api/doctor/viewBySearch';
    return this.http.post<any>(api, { speciality });
  }
}
