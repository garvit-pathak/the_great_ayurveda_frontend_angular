import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Appointment } from '../../model/appointment';
import { AppointmentService } from '../../service/appointment.service';
import { DoctorService } from '../../service/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { ReviewsService } from 'src/app/service/reviews.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css'],
})
export class DoctorDetailsComponent implements OnInit {
  detail: any;
  doctorId: any;
  uid: any;
  review1: any;
  reviewList: any[] = [];
  constructor(
    private activateRouter: ActivatedRoute,
    private _review: ReviewsService,
    private taoster: ToastrService,
    private router: Router,
    private _drService: DoctorService,
    private _app: AppointmentService
  ) {
    this.doctorId = this.activateRouter.snapshot.paramMap.get('did');
    this.router.events.subscribe((event) => {
      this.doctorId = this.activateRouter.snapshot.paramMap.get('did');
      if (event instanceof NavigationEnd) {
        this._drService.details(this.doctorId).subscribe((data) => {
          console.log(data);
          this.detail = data;
        });
      }
    });
    this.uid = sessionStorage.getItem('userId');
    this._review.viewreviewbyid(this.doctorId).subscribe((data) => {
      this.reviewList = data.reviewerDetail;
    });
  }

  ngOnInit(): void {}

  public appoin(id: string) {
    this.router.navigate(['book-appointment' + '/' + id]);
  }

  public review() {
    alert(this.review1);
    this._drService
      .reviewDoctor(this.uid, this.doctorId, this.review1)
      .subscribe((data) => {
        // console.log(data)
        if (data) {
          this.taoster.success('Review Send');
        }
      });
  }
}
