import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
private viewMedicineApi="http://localhost:8801/api/medicine/viewall";
private SearchByKeywordApi="http://localhost:8801/api/medicine/search";
private viewByproID = "http://localhost:8801/api/medicine/viewbypro" ;
  constructor(private _http: HttpClient) { }
  public viewMedicine(): Observable<any> {
    return this._http.get<any>(this.viewMedicineApi);
  }
  public searchMedicine(keyword:string):Observable<any>{
    return this._http.post<any>(this.SearchByKeywordApi,{keyword});
  }
  public viewParticular(pid:string):Observable<any>{
        return this._http.post<any>(this.viewByproID,{id:pid});
  }
  public medicineReview(uid:string,pid:string,review:string){
    let api='http://localhost:8801/api/medicine/review'
    return this._http.post<any>(api,{uId:uid,pId:pid,reviewText:review})
  }
  public reviewView(mid:string){
    let api='http://localhost:8801/api/medicine/viewbypro'
    return this._http.post<any>(api,{id:mid})
  }
}
