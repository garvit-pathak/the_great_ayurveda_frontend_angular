import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  cartList: any[] = [];
  uid1: any = '';
  totalPrice: number = 0;
  qty: any = 1;
  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.uid1 = sessionStorage.getItem('userId');
    this.cart.cartView(this.uid1).subscribe((data) => {
      localStorage.setItem('cart', JSON.stringify(data));
      this.cartList = data.medicineList;
      this.totalPrice = 0;
      for (let element of this.cartList) {
        this.totalPrice += element.price * 1;
      }
      console.log(this.totalPrice);
    });
    console.log('qty : ' + this.qty);
  }

  public removeCart(mid: string) {
    this.cart.removeCart(this.uid1, mid).subscribe((data) => {
      this.ngOnInit();
    });
  }
  // v=''
  // get(event: any) {
  //   this.v = event.target.value;
  //   alert(this.v);
  // }

  test() {
    console.log(this.qty);
  }
}
