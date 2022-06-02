import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MedicineService } from '../../service/medicine.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.css'],
})
export class MedicineDetailsComponent implements OnInit {
  pid: string = '';
  detail: any;
  uid: any;
  revie = '';
  reviewList:any;
  catList:any=[];
  constructor(
    private _med: MedicineService,
    private acitvateRouter: ActivatedRoute,
    private router: Router,
    private taoster: ToastrService,
    private cart: CartService
  ) {
    this.pid = <string>this.acitvateRouter.snapshot.paramMap.get('pid');
    this.router.events.subscribe((event) => {
      this.pid = <string>this.acitvateRouter.snapshot.paramMap.get('pid');
      if (event instanceof NavigationEnd) {
        this._med.viewParticular(this.pid).subscribe((data) => {
          // console.log(data);
          this.detail = data;
        });
      }
    });
    this.uid = sessionStorage.getItem('userId');
    this._med.reviewView(this.pid).subscribe((data) => {
      console.log(data);
      this.reviewList=data.reviewerDetail;
    });
  }

  ngOnInit(): void {
    this.uid = sessionStorage.getItem('userId');
    console.log(this.uid)
    this.cart.cartView(this.uid).subscribe((data) => {
      console.log(data);
      this.catList = data.medicineList;
      console.log(this.catList);
    });
  }
  public review() {
    if (sessionStorage.getItem('userId')) {
    this._med
      .medicineReview(this.uid, this.pid, this.revie)
      .subscribe((data) => {
        // console.log(data)
        if (data) this.taoster.success('Medicine Added To The Cart');
      });
    }else this.taoster.warning('Login First Please');
  }

  // constructor() {
  //   this.router.events.subscribe(event=>{
  //     this.catid=<string>this.ActivateRoute.snapshot.paramMap.get("id");
  //     if(event instanceof NavigationEnd){
  //       this.productService.productView(this.catid).subscribe(data=>{
  //         this.products = data;
  //       })
  //     }
  //   });
  //  }
  public add(mid: string) {
    let flage: boolean = false;
    if (sessionStorage.getItem('userId')) {
      for (let element of this.catList) {
        if (element._id == mid) {
          flage = true;
          break;
        }
      }
      if (flage) {
        this.taoster.warning('Already Added');
      } else {
        this.cart.addToCart(this.uid, mid).subscribe((data) => {
          console.log(data);
          if (data) {
            this.taoster.success('Medicine Added To The Cart');
          }
          this.ngOnInit();
        });
      }
    } else this.taoster.warning('Login First Please');
    flage = false;
  }
}
