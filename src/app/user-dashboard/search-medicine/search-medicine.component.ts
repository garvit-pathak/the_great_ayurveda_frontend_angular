import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MedicineService } from '../../service/medicine.service';

@Component({
  selector: 'app-search-medicine',
  templateUrl: './search-medicine.component.html',
  styleUrls: ['./search-medicine.component.css']
})
export class SearchMedicineComponent implements OnInit {
  medicines:any=[];
 keyword:any;
  constructor( private activateRouter: ActivatedRoute ,private _medService : MedicineService ,private router : Router ) {
    this.router.events.subscribe(event=>{
    this.keyword = <string> this.activateRouter.snapshot.paramMap.get('search');
      if(event instanceof NavigationEnd){
        this._medService.searchMedicine(this.keyword).subscribe(data=>{
            console.log(data);
            this.medicines = data;
        })
      }
    })

   }
   public viewDetails(pid:string){
    
    this.router.navigate(['medicine-details'+'/'+pid]);
   }
  ngOnInit(): void {
  }
  
}
