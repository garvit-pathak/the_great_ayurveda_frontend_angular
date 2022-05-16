import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
detail:any;
doctorId:any;
  constructor(private activateRouter:ActivatedRoute,private router:Router,private _drService:DoctorService) {
         this.router.events.subscribe(event=>{
           this.doctorId =<string> this.activateRouter.snapshot.paramMap.get('did');
           if(event instanceof NavigationEnd){
             this._drService.details(this.doctorId).subscribe(data=>{
               console.log(data);
               this.detail = data;
             })
           }
         })
   }

  ngOnInit(): void {
  }

}
