import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../service/doctor.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent implements OnInit {
  doctorList: any = [];
  search:any;
  uid:any="";

page: number = 1;
  count: number = 0;
  cardSize: number = 9
  constructor( private spinner: NgxSpinnerService, private doctorService: DoctorService,private router:Router) {
    this.doctorService.view().subscribe((data) => {
      this.spinner.hide();

      this.doctorList = data;
   
    });
  }
public appoin(id:string){
  this.router.navigate(['book-appointment'+'/'+id])
}
public navigate(event:any){
  this.search = event.target.value;
   this.router.navigate(['search-doctor',this.search])
}

public viewDetails(did:string){
 this.router.navigate(['doctor-details'+'/'+did])
}
onCardDataChange(event: any) {
  this.page = event;
}
  ngOnInit(): void {
    this.spinner.show();
    
  }
}
