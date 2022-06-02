import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiseasesService {

  constructor(private http:HttpClient) { }

  public View(): Observable<any>{
    let view='https://the-great-ayurveda-api.herokuapp.com/api/disease/viewall';
   return this.http.get<any>(view)

  }
  public search(keyword:string): Observable<any>{
    let Search='https://the-great-ayurveda-api.herokuapp.com/api/disease/search-disease'
   return this.http.post<any>(Search,{keyword})
  }

  public reviewDiseases(did:string,uid:string,text:string): Observable<any>{
    let api='https://the-great-ayurveda-api.herokuapp.com/api/disease/review'
    return this.http.post<any>(api,{dId:did,uId:uid,reviewText:text})
  }
  public reviewRevie(id:string):Observable<any>{
    let api='https://the-great-ayurveda-api.herokuapp.com/api/disease/view-particularDisease'
    return this.http.post<any>(api,{dId:id})
  }
  public reviewRevie1():Observable<any>{
    let api='https://the-great-ayurveda-api.herokuapp.com/api/disease/view-particularDisease'
    let id='62852825f6e463bf76ef5bee'
    return this.http.post<any>(api,{dId:id})
  }
}
