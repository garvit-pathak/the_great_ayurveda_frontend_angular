import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DoctorService } from 'src/app/service/doctor.service';
import { DiseasesService } from '../../service/diseases.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css'],
})
export class DiseasesComponent implements OnInit {
  keywords = '';
  disList: any = [];
  doctor: any[] = [];
  show : boolean = false;
link:string='';
  constructor(private diseasesService: DiseasesService ,private activatedRouter: ActivatedRoute,private router :Router,private drService : DoctorService) {
this.router.events.subscribe(event=>{
  this.keywords = <string> this.activatedRouter.snapshot.paramMap.get('search');
  if(event instanceof NavigationEnd){
    this.diseasesService.search(this.keywords).subscribe(data=>{
      this.disList = data;
      console.log(this.disList);
      if(data.yogaLink){
         this.link = this.disList.yogaLink 
         this.show = true ;
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
    this.drService.view().subscribe(data=>{
      this.doctor=data;

    },err=>{
      console.log(err);
    })

  }
}
