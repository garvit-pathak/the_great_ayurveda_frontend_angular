import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
  constructor(
    private activateRouter: ActivatedRoute,
    private _medService: MedicineService,
    private router: Router,
    private cart: CartService,
    private taoster: ToastrService
  ) {
    this.router.events.subscribe((event) => {
      this.keyword = <string>(
        this.activateRouter.snapshot.paramMap.get('search')
      );
      if (event instanceof NavigationEnd) {
        this._medService.searchMedicine(this.keyword).subscribe((data) => {
          console.log(data);
          this.medicines = data;
        });
      }
    });
  }
  public viewDetails(pid: string) {
    this.router.navigate(['medicine-details' + '/' + pid]);
  }
  ngOnInit(): void {}
  public add(mid: string) {
    if (sessionStorage.getItem('userId')) {
      this.cart.addToCart(this.uid, mid).subscribe((data: any) => {
        console.log(data);
        if (data) this.taoster.success('Medicine Added To The Cart');
      });
    } else this.taoster.warning('Login First Please');
  }
}
