import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
userId:any;
// medList:any[]=[];
orderList:any[]=[];
  constructor(private _user:UserService) {
    this.userId=sessionStorage.getItem("userId")
   }

  ngOnInit(): void {
    this._user.orderHistory(this.userId).subscribe(data=>{
      console.log(data)
      // this.medList=data[0].medicineList;
      // console.log(this.medList)
      this.orderList=data;
      console.log(this.orderList)
    })
  }
  
    
}
