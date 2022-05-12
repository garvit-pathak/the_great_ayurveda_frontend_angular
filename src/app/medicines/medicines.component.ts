import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../service/medicine.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {
medicines:any=[];
keyword:string="";
medicineList:any=[];
  constructor(private medicineSearvice:MedicineService) {
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

   

  ngOnInit(): void {
  }

}
