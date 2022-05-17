import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from '../../service/medicine.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {
medicines:any=[];
keyword:string="";
search:any;
medicineList:any=[];
particulaMed:any="";
  constructor(private medicineSearvice:MedicineService ,private router:Router ) {
    this.medicineSearvice.viewMedicine().subscribe((data:any)=>{
        console.log(data);
        this.medicines=data;
    })
   }
   public searchMedicine(keyword:string){
       this.medicineSearvice.searchMedicine(keyword).subscribe((data:any)=>{
         console.log(data);
         this.medicineList=data;
       })
   } 
   public navigate(event:any){
     this.search = event.target.value;
      this.router.navigate(['search-medicine',this.search])
   }

   public viewDetails(pid:string){
    
    this.router.navigate(['medicine-details'+'/'+pid]);
   }

  ngOnInit(): void {
  }

}
