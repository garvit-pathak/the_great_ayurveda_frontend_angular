import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent implements OnInit {
  doctorList: any = [];
  constructor(private doctorService: DoctorService,private router:Router) {
    this.doctorService.view().subscribe((data) => {
      this.doctorList = data;
      console.log(data);
    });
  }
public appoin(id:string){
  this.router.navigate(['book-appointment'+'/'+id])
}
  ngOnInit(): void {}
}
