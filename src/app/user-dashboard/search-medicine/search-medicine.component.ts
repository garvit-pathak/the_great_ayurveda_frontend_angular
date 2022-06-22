import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/service/cart.service';
import { MedicineService } from '../../service/medicine.service';

@Component({
  selector: 'app-search-medicine',
  templateUrl: './search-medicine.component.html',
  styleUrls: ['./search-medicine.component.css'],
})
export class SearchMedicineComponent implements OnInit {
  medicines: any = [];
  keyword: any;
  uid: any;
  catList: any = [];
  constructor(
    private activateRouter: ActivatedRoute,
    private _medService: MedicineService,
    private router: Router,
    private cart: CartService,
    private Spinner  : NgxSpinnerService,
    private taoster: ToastrService
  ) {
    this.router.events.subscribe((event) => {
      this.keyword = <string>(
        this.activateRouter.snapshot.paramMap.get('search')
      );
      if (event instanceof NavigationEnd) {
        this._medService.searchMedicine(this.keyword).subscribe((data) => {
          this.Spinner.hide();
          console.log(data);
          this.medicines = data;
        });
      }
    });
  }
  public viewDetails(pid: string) {
    this.router.navigate(['medicine-details' + '/' + pid]);
  }
  ngOnInit(): void {
    this.Spinner.show();
    this.uid = sessionStorage.getItem('userId');
    this.cart.cartView(this.uid).subscribe((data) => {
      console.log(data);
      this.catList = data.medicineList;
      console.log(this.catList);
    });
  }
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
