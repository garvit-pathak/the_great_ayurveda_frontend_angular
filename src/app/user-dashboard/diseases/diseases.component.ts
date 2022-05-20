import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DoctorService } from 'src/app/service/doctor.service';
import { DiseasesService } from '../../service/diseases.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css'],
})
export class DiseasesComponent implements OnInit {
  keywords = '';
  disList: any = [];
  doctor: any[] = [];
  uid: any;
  show: boolean = false;
  link: string = '';
  constructor(
    private diseasesService: DiseasesService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private drService: DoctorService,
    private taoster: ToastrService,
    private cart: CartService
  ) {
    this.router.events.subscribe((event) => {
      this.keywords = <string>(
        this.activatedRouter.snapshot.paramMap.get('search')
      );
      if (event instanceof NavigationEnd) {
        this.diseasesService.search(this.keywords).subscribe((data) => {
          this.disList = data;
          console.log(this.disList);
          if (data.yogaLink) {
            this.link = this.disList.yogaLink;
            this.show = true;
            console.log(this.link);
          }
        });
      }
    });
  }

  ngOnInit(): void {
    this.drService.view().subscribe(
      (data) => {
        this.doctor = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  public appoin(id: string) {
    if (sessionStorage.getItem('userId')) {
      this.router.navigate(['book-appointment' + '/' + id]);
    } else this.taoster.warning('Please LogIn First');
  }
  public add(mid: string) {
    if (sessionStorage.getItem('userId')) {
      // let mId = <HTMLButtonElement>document.getElementById(mid);
      // console.log(mId)
      // this.aElement.nativeElement.innerHTML="hello <i class='bx bxs-cart-add'></i>";
      // let but = mId.innerHTML.split("<")[0];
      // console.log(but);
      // let appliedClass = mId?.classList;
      // console.log(appliedClass.value)

      this.cart.addToCart(this.uid, mid).subscribe((data: any) => {
        console.log(data);
        if (data) this.taoster.success('Medicine Added To The Cart');
      });
    } else this.taoster.warning('Login First Please');
  }
}
