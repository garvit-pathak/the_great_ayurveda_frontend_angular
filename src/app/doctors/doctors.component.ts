import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent implements OnInit {
  doctorList: any = [];
  constructor(private doctorService: DoctorService) {
    this.doctorService.view().subscribe((data) => {
      this.doctorList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
