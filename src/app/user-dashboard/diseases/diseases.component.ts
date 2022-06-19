import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DoctorService } from 'src/app/service/doctor.service';
import { DiseasesService } from '../../service/diseases.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/service/cart.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ViewportScroller } from '@angular/common'; 
@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css'],
})
export class DiseasesComponent implements OnInit {
  keywords = '';
  disList: any = [];
  doctor: any[] = [];
  diseaseId: any;
  uid: any;
  showErr:number=0;
  medicines: any[] = [];
  show: boolean = false;
  link: string = '';
  reviewText: any;
  diseaseID: any;
  diseasList: any;
  errPage: any;
  catList:any=[];
  constructor(
    private viewPort:ViewportScroller,
    private spinner: NgxSpinnerService,
    private taoster: ToastrService,
    private cart: CartService,
    private diseasesService: DiseasesService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private drService: DoctorService
  ) {
    this.spinner.show();

    this.router.events.subscribe((event) => {
      this.keywords = <string>(
        this.activatedRouter.snapshot.paramMap.get('search')
      );
      if (event instanceof NavigationEnd) {
          this.diseasesService.search(this.keywords).subscribe((data) => {

            if(!data){
              this.showErr=1;
          this.spinner.hide(); 

              console.log(this.showErr)
  
            }
          // console.log(data+"data");
          else
          {
          this.spinner.hide(); 
             
                  this.disList = data;
          this.diseaseId = this.disList._id;
          sessionStorage.setItem('diseaseID', this.disList._id);
          this.medicines = data.medicines;
          console.log(this.medicines);
          if (data.yogaLink) {
            this.link = this.disList.yogaLink;
            this.show = true;
          }
          
        }
 
        },(error)=>{
          // console.log(error);
        })
        
      }
    });
    
    this.uid = sessionStorage.getItem('userId');
    this.diseaseID = sessionStorage.getItem('diseaseID');
    this.diseasesService.reviewRevie(this.diseaseID).subscribe((data) => {
      this.diseasList = data.reviewerDetail;
    });

  }

  
 onClick(id:string){
  this.viewPort.scrollToAnchor(id);
 }
  ngOnInit(): void {
    this.spinner.show();

    // setTimeout(() => {
      /** spinner ends after 5 seconds */
      
    // }, 1500);
    this.drService.view().subscribe(
      (data) => {
        this.spinner.hide();
        this.doctor = data;
      },
      (err) => {
        this.spinner.hide();
        console.log(err);
      }
    );
    this.uid = sessionStorage.getItem('userId');
    console.log(this.uid)
    this.cart.cartView(this.uid).subscribe((data) => {
      console.log(data);
      this.catList = data.medicineList;
      console.log(this.catList);
    });
  }
  public appoin(id: string) {
    if (sessionStorage.getItem('userId')) {
      this.router.navigate(['book-appointment' + '/' + id]);
    } else this.taoster.warning('Please LogIn First');
  }
  public add(mid: string) {
    let flage: boolean = false;
    if (sessionStorage.getItem('userId')) {
      for (let element of this.catList) {
        if (element._id == mid) {
          flage = true;
          break;
        }
      }
      if (flage) {
        this.taoster.warning('Already Added');
      } else {
        this.cart.addToCart(this.uid, mid).subscribe((data) => {
          console.log(data);
          if (data) {
            this.taoster.success('Medicine Added To The Cart');
          }
          this.ngOnInit();
        });
      }
    } else this.taoster.warning('Login First Please');
    flage = false;
  }

  public review() {
    this.diseasesService
      .reviewDiseases(this.diseaseId, this.uid, this.reviewText)
      .subscribe((data) => {
        //  console.log(data)
        if (data) this.taoster.success('Review Success Full Send');
      });
  }
  public viewDetails(pid:string){
    
    this.router.navigate(['medicine-details'+'/'+pid]);
   }
}
