import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../service/doctor.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
declare var webkitSpeechRecognition:any;

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent implements OnInit {
  doctorList: any = [];
  search: any;

  uid: any = '';

  page: number = 1;
  count: number = 0;
  cardSize: number = 9;
  constructor(
    private spinner: NgxSpinnerService,
    private taoster: ToastrService,
    private doctorService: DoctorService,
    private router: Router
  ) {
    this.doctorService.view().subscribe((data) => {
      // this.spinner.hide();

      this.doctorList = data;
    });
  }
  public appoin(id: string) {
    if (sessionStorage.getItem('userId')) {
      this.router.navigate(['book-appointment' + '/' + id]);
    } else this.taoster.warning('Login First Please');
  }
  public navigate(event: any) {
    this.search = event.target.value;
    this.router.navigate(['search-doctor', this.search]);
  }


  voice(){
    if("webkitSpeechRecognition" in window){
        
      let vSearch = new webkitSpeechRecognition();
      vSearch.lang = "en-US";
      vSearch.start();
  
      vSearch.onresult = async (e:any) =>{
        this.search = await e.results[0][0].transcript;
        console.log(this.search);
        this.router.navigate(['search-doctor',this.search]).then(()=>{
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
  

  public viewDetails(did: string) {
    if (sessionStorage.getItem('userId')) {
      this.router.navigate(['doctor-details' + '/' + did]);
    } else this.taoster.warning('Login First Please');
  }
  
  onCardDataChange(event: any) {
    this.page = event;
  }
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);
  }
}
