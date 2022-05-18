import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DiseasesService } from '../../service/diseases.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css'],
})
export class DiseasesComponent implements OnInit {
  keywords = '';
  disList: any = [];

link:string='';
  constructor(private diseasesService: DiseasesService ,private activatedRouter: ActivatedRoute,private router :Router) {
this.router.events.subscribe(event=>{
  this.keywords = <string> this.activatedRouter.snapshot.paramMap.get('search');
  if(event instanceof NavigationEnd){
    this.diseasesService.search(this.keywords).subscribe(data=>{
      this.disList = data;
      console.log(this.disList);
      this.link = this.disList.yogaLink 
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


  }
}
