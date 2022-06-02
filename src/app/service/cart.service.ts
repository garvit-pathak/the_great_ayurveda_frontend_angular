import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http:HttpClient) { }

  public addToCart(uid:string,mid:string):Observable<any>{
    let add='https://the-great-ayurveda-api.herokuapp.com/api/cart/add'
   return this._http.post<any>(add,{uId:uid,mId:mid})
  }
  public cartView(uid1:string):Observable<any>{
    let view='https://the-great-ayurveda-api.herokuapp.com/api/cart/view'
    return this._http.post(view,{uId:uid1})
  }

  public removeCart(userId:string,medId:string):Observable<any>{
    let rem='https://the-great-ayurveda-api.herokuapp.com/api/cart/remove'
   return this._http.post(rem,{uId:userId,pId:medId})
  }

  public deleteCart(){
    let api='https://the-great-ayurveda-api.herokuapp.com/api/cart/delete'
    let uid = sessionStorage.getItem('userId');
    return this._http.post(api,{id:uid})
  }
}