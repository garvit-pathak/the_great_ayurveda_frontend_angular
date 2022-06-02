import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  apiUrl='https://the-great-ayurveda-api.herokuapp.com/api/doctor/viewReviewbyDid';

  constructor(private _http :HttpClient) { }

  public viewreviewbyid(id:any):Observable<any>{
    return this._http.post<any>(this.apiUrl,{dId:id})

  }


}
