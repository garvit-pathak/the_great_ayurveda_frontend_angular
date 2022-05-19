import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';
declare let Razorpay: any;
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
  cart1: any;
  mobile?: string;
  address?: string;
  subTotal: any;
  totalLength: any;
  
  constructor(private cart: CartService, private order: OrderService) {}

  ngOnInit(): void {
    this.uid1 = sessionStorage.getItem('userId');
    this.cart.cartView(this.uid1).subscribe((data) => {
      this.cart1 = data;
      this.cart1 = this.cart1.medicineList;
      for (let i = 0; i < this.cart1.length; i++) {
        this.cart1[i].pPrice = this.cart1[i].price;
        this.cart1[i].index = i;
        this.cart1[i].pro_qty = 1;
      }
      console.log(this.cart1);
      localStorage.setItem('cart', JSON.stringify(this.cart1));

      this.cartList = data.medicineList;
      this.totalPrice = 0;
      for (let element of this.cartList) {
        this.totalPrice += element.price * 1;
      }
      console.log(this.totalPrice);
    });
    let cart: any;
    cart = JSON.parse(localStorage.getItem('cart') || '{}');
    let length = cart.length;
    let totalPrice = 0;
    for (var j = 0; j < cart.length; j++) {
      totalPrice = totalPrice + cart[j].pro_qty * cart[j].pPrice;
    }
    this.subTotal = totalPrice;
    this.totalLength = length;
  }

  public removeCart(mid: string) {
    this.cart.removeCart(this.uid1, mid).subscribe((data) => {
      this.ngOnInit();
      location.reload();
    });
  }

  updateQuantity(quantity: any, price: any, i: any) {
    let totalquantity = quantity;
    let cart = JSON.parse(localStorage.getItem('cart') || '{}');
    cart[i].pro_qty = totalquantity;
    localStorage.setItem('cart', JSON.stringify(cart));

    cart = JSON.parse(localStorage.getItem('cart') || '{}');
    let length = cart.length;
    let totalPrice = 0;
    for (var j = 0; j < cart.length; j++) {
      totalPrice = totalPrice + cart[j].pro_qty * cart[j].pPrice;
    }

    this.subTotal = totalPrice;
    this.totalLength = length;
  }

  public payment() {
    let medicineList = [];
    for (let element of this.cart1) {
      medicineList.push({
        product: element._id,
        totalPrice: element.price,
        qty: 1,
      });
    }
    let order1 = {
      id: JSON.parse(localStorage.getItem('user') || '{}')._id,
      medicineList: medicineList,
      amount: this.subTotal,
      address: this.address,
      mobile: this.mobile,
    };
    this.order.onlinePay(this.totalPrice).subscribe((data) => {
      var options = {
        key: 'rzp_test_NoD4Su2E0uGypJ', // Enter the Key ID generated from the Dashboard
        amount: this.subTotal + '00', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',
        name: 'Acme Corp',
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: (response: {
          razorpay_payment_id: any;
          razorpay_order_id: any;
          razorpay_signature: any;
        }) => {
          this.order.placeOrder(order1).subscribe((data) => {
            console.log(data);
            window.alert('Order added successfully...');
            localStorage.removeItem('cart');
          });
        },
        prefill: {
          name: 'Faizaan khan',
          email: 'faiz@gmail.com',
          contact: '9691492264',
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#3399cc',
        },
      };
      var rzp1 = new Razorpay(options);
      rzp1.on(
        'payment.failed',
        function (response: {
          error: {
            code: any;
            description: any;
            source: any;
            step: any;
            reason: any;
            metadata: { order_id: any; payment_id: any };
          };
        }) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        }
      );
      rzp1.open();
      this.cart.deleteCart().subscribe((data) => {
        console.log('cart deleted');
      });
    });
  }
}
