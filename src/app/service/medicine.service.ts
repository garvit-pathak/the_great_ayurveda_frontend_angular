import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
private viewMedicineApi="https://the-great-ayurveda-api.herokuapp.com/api/medicine/viewall";
private SearchByKeywordApi="https://the-great-ayurveda-api.herokuapp.com/api/medicine/search";
private viewByproID = "https://the-great-ayurveda-api.herokuapp.com/api/medicine/viewbypro" ;
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
    let api='https://the-great-ayurveda-api.herokuapp.com/api/medicine/review'
    return this._http.post<any>(api,{uId:uid,pId:pid,reviewText:review})
  }
  public reviewView(mid:string){
    let api='https://the-great-ayurveda-api.herokuapp.com/api/medicine/viewbypro'
    return this._http.post<any>(api,{id:mid})
  }
}
