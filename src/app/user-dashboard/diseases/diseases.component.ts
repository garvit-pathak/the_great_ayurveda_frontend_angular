import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DoctorService } from 'src/app/service/doctor.service';
import { DiseasesService } from '../../service/diseases.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css'],
})
export class DiseasesComponent implements OnInit {
  keywords = '';
  disList: any = [];
  doctor: any[] = [];
  medicines: any[] = [];
  show: boolean = false;
  link: string = '';
  constructor(private spinner: NgxSpinnerService, private diseasesService: DiseasesService, private activatedRouter: ActivatedRoute, private router: Router, private drService: DoctorService) {
    this.router.events.subscribe(event => {
      this.keywords = <string>this.activatedRouter.snapshot.paramMap.get('search');
      if (event instanceof NavigationEnd) {
        this.diseasesService.search(this.keywords).subscribe(data => {
          this.spinner.hide();

          this.disList = data;
          this.medicines = data.medicines;
          console.log(this.medicines);
          if (data.yogaLink) {
            this.link = this.disList.yogaLink
            this.show = true;
            console.log(this.link);

          }
        })
      }
    }


    )
    // this.diseasesService.search(this.keywords).subscribe((data) => {
    //   console.log(data);
    //   this.disList = data;
    // });
  }

  ngOnInit(): void {
    this.spinner.show();
    this.drService.view().subscribe(data => {
      this.doctor = data;

    }, err => {
      console.log(err);
    })

  }
}
