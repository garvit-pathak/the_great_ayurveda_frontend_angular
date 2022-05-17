import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,NavigationEnd} from '@angular/router';
import { MedicineService } from '../../service/medicine.service';

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.css']
})
export class MedicineDetailsComponent implements OnInit {
   pid:string="";
   detail:any ;
  constructor(private _med:MedicineService,private acitvateRouter :ActivatedRoute ,private router:Router ) { 
    this.router.events.subscribe(event=>{
      this.pid =<string> this.acitvateRouter.snapshot.paramMap.get('pid')
      if(event instanceof NavigationEnd){
              this._med.viewParticular(this.pid).subscribe(data=>{
                console.log(data);
                this.detail = data;  
              })
            }
    })

  }
 
  ngOnInit(): void {
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

}
