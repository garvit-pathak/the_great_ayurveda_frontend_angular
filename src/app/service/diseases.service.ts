import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiseasesService {

  constructor(private http:HttpClient) { }

  public View(): Observable<any>{
    let view='http://localhost:8801/api/disease/viewall';
   return this.http.get<any>(view)

  }
  public search(keyword:string): Observable<any>{
    let Search='http://localhost:8801/api/disease/search-disease'
   return this.http.post<any>(Search,{keyword})
  }

  public reviewDiseases(did:string,uid:string,text:string): Observable<any>{
    let api='http://localhost:8801/api/disease/review'
    return this.http.post<any>(api,{dId:did,uId:uid,reviewText:text})
  }
  public reviewRevie(id:string):Observable<any>{
    let api='http://localhost:8801/api/disease/view-particularDisease'
    return this.http.post<any>(api,{dId:id})
  }
  public reviewRevie1():Observable<any>{
    let api='http://localhost:8801/api/disease/view-particularDisease'
    let id='62852825f6e463bf76ef5bee'
    return this.http.post<any>(api,{dId:id})
  }
}
