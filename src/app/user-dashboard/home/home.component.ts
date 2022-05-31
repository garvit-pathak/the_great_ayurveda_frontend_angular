import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/service/cart.service';
import { DiseasesService } from 'src/app/service/diseases.service';
import { DoctorService } from 'src/app/service/doctor.service';
import { MedicineService } from 'src/app/service/medicine.service';
import { UserService } from 'src/app/service/user.service';


declare var webkitSpeechRecognition:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
search: any;
total:any;
doctorList:any;
diseas:any;
userList:any;
review:any=[];

  constructor(private router:Router,private cart: CartService
    ,private medicineSearvice:MedicineService,private user:UserService,private doctorService: DoctorService,private disease:DiseasesService
    ) { 
    this.medicineSearvice.viewMedicine().subscribe((data:any)=>{
      this.total=data.length;
    })
    this.doctorService.view().subscribe((data) => {
      this.doctorList = data.length;
    });
    this.disease.View().subscribe(data=>{
      this.diseas=data.length;
    })
    this.user.view().subscribe(data=>{
      this.userList=data.length;
    })
    this.disease.reviewRevie1().subscribe(data=>{
      console.log(data)
      this.review=data.reviewerDetail;
    })
  }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true ,
    touchDrag: true ,
    pullDrag: true,
    autoplay:true,
    dots: true,
    navSpeed: 200,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
 voice(){
  if("webkitSpeechRecognition" in window){
      
    let vSearch = new webkitSpeechRecognition();
    vSearch.lang = "en-US";
    vSearch.start();

    vSearch.onresult = async (e:any) =>{
      this.search = await e.results[0][0].transcript;
      console.log(this.search);
      this.router.navigate(['diseases',this.search]).then(()=>{
        location.reload();
      });
      // location.reload();
      vSearch.stop();
      
    }
    vSearch.onerror = function(e:any){
      console.log(e);
      vSearch.stop();
    }
  }
  else{
    console.log("Your browser dosen't support speech recognition");
  }
 }


 public navigate(event:any){
   this.search = event.target.value ;
   this.router.navigate(['diseases',this.search]);
 }
}
