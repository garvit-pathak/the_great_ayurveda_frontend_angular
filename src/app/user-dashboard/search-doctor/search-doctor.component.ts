import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css'],
})
export class SearchDoctorComponent implements OnInit {
  speciality = '';
  speci: any = [];
  constructor(
    private taoster: ToastrService,
    private activateRouter: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorService
  ) {
    this.router.events.subscribe((event) => {
      this.speciality = <string>(
        this.activateRouter.snapshot.paramMap.get('search')
      );
      if (event instanceof NavigationEnd) {
        this.doctorService.searchDoc(this.speciality).subscribe((data) => {
          console.log(data);
          this.speci = data;
        });
      }
    });
  }

  public viewDetails(did: string) {
    this.router.navigate(['doctor-details' + '/' + did]);
  }
  ngOnInit(): void {}
  public appoin(id: string) {
    if (sessionStorage.getItem('userId')) {
      this.router.navigate(['book-appointment' + '/' + id]);
    } else this.taoster.warning('Login First Please');
  }
}
