import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/service/cart.service';
import { MedicineService } from '../../service/medicine.service';
import { NgxSpinnerService } from "ngx-spinner";
declare var webkitSpeechRecognition:any;

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
uid:any="";

page: number = 1;
  count: number = 0;
  cardSize: number = 9
  constructor(private medicineSearvice:MedicineService ,private spinner: NgxSpinnerService,private router:Router ,private cart: CartService ,private taoster : ToastrService ) {
    this.medicineSearvice.viewMedicine().subscribe((data:any)=>{
      // alert("chlri");
      // this.hideSpinner();
      
          // console.log(data);
        this.medicines=data;
        // this.spinner.hide();  

        this.uid = sessionStorage.getItem('userId');
    })
   }
   async hideSpinner(){
     await this.spinner.hide();
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
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);
  }
  public add(mid:string){
    if(sessionStorage.getItem('userId')){
    // let mId = <HTMLButtonElement>document.getElementById(mid);
    // console.log(mId)
    // this.aElement.nativeElement.innerHTML="hello <i class='bx bxs-cart-add'></i>";
    // let but = mId.innerHTML.split("<")[0];
    // console.log(but);
    // let appliedClass = mId?.classList;
    // console.log(appliedClass.value)
  
    this.cart.addToCart(this.uid,mid).subscribe(data=>{
      console.log(data)
      if(data){
      this.taoster.success('Medicine Added To The Cart');

      }
      
    })
  }
  else
  this.taoster.warning('Login First Please');
}


voice(){
  if("webkitSpeechRecognition" in window){
      
    let vSearch = new webkitSpeechRecognition();
    vSearch.lang = "en-US";
    vSearch.start();

    vSearch.onresult = async (e:any) =>{
      this.search = await e.results[0][0].transcript;
      console.log(this.search);
      this.router.navigate(['search-medicine',this.search]).then(()=>{
        location.reload();
      });
      // location.reload();
      vSearch.stop();
      
    }
    vSearch.onerror = function(e:any){
      console.log(e);
      vSearch.stop();
    }
  }
  else{
    console.log("Your browser dosen't support speech recognition");
  }
 }



  onCardDataChange(event: any) {
    this.page = event;
  }
}
