import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http:HttpClient) { }

  public addToCart(uid:string,mid:string):Observable<any>{
    let add='http://localhost:8801/api/cart/add'
   return this._http.post<any>(add,{uId:uid,mId:mid})
  }
  public cartView(uid1:string):Observable<any>{
    let view='http://localhost:8801/api/cart/view'
    return this._http.post(view,{uId:uid1})
  }

  public removeCart(userId:string,medId:string):Observable<any>{
    let rem='http://localhost:8801/api/cart/remove'
   return this._http.post(rem,{uId:userId,pId:medId})
  }
}
