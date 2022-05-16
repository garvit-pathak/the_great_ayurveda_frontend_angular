import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Appointment } from '../model/appointment';
import { AppointmentService } from '../service/appointment.service';
import { DoctorService } from '../service/doctor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
detail:any;
doctorId:any;
  constructor(private activateRouter:ActivatedRoute, private taoster: ToastrService,private router:Router,private _drService:DoctorService,private _app: AppointmentService,) {
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
  
  public appoin(id:string){
    this.router.navigate(['book-appointment'+'/'+id])
  }
}
