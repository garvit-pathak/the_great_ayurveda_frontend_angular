import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/service/cart.service';
import { MedicineService } from '../../service/medicine.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css'],
})
export class MedicinesComponent implements OnInit {
  medicines: any = [];
  keyword: string = '';
  search: any;
  medicineList: any = [];
  particulaMed: any = '';
  uid: any = '';
  catList: any[] = [];
  page: number = 1;
  count: number = 0;
  cardSize: number = 9;
  constructor(
    private medicineSearvice: MedicineService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private cart: CartService,
    private taoster: ToastrService
  ) {
    this.uid = sessionStorage.getItem('userId');

    this.medicineSearvice.viewMedicine().subscribe((data: any) => {
      // alert("chlri");
      // this.hideSpinner();

      // console.log(data);
      this.medicines = data;
      // this.spinner.hide();

      this.uid = sessionStorage.getItem('userId');
      console.log("user"+this.uid)
    });
    
  }
  async hideSpinner() {
    await this.spinner.hide();
  }
  public searchMedicine(keyword: string) {
    this.medicineSearvice.searchMedicine(keyword).subscribe((data: any) => {
      console.log(data);
      this.medicineList = data;
    });
  }
  public navigate(event: any) {
    this.search = event.target.value;
    this.router.navigate(['search-medicine', this.search]);
  }

  public viewDetails(pid: string) {
    this.router.navigate(['medicine-details' + '/' + pid]);
  }

  ngOnInit(): void {
    // this.uid = sessionStorage.getItem('userId');
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);
    this.cart.cartView(this.uid).subscribe((data) => {
      console.log(data);
      this.catList = data.medicineList;
      console.log(this.catList);
    });
  }

  flag: boolean=false;
  public add(mid: string) {
    if (sessionStorage.getItem('userId')) {
      for (let element of this.catList) {
        if (element._id == mid) {
          this.flag = true;
          break;
        }
      }
      if (this.flag) {
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
    }
     else this.taoster.warning('Login First Please');
     this.flag = false;
  }

  onCardDataChange(event: any) {
    this.page = event;
  }
}
