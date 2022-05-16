import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-header-doctor',
  templateUrl: './header-doctor.component.html',
  styleUrls: ['./header-doctor.component.css']
})
export class HeaderDoctorComponent implements OnInit {
  // value:any;
  // scrHeight:any;
  // scrWidth:any;
  // @HostListener('window:resize', ['$event'])
  // getScreenSize(event:any) {
  //       this.scrHeight = window.innerHeight;
  //       this.scrWidth = window.innerWidth;
        
  //       if(this.scrWidth>=768)
  //         this.value=false;
  //       else  
  //         this.value = true;
  // }
  constructor() { }

  ngOnInit(): void {
  }
  // navbar:any="";
  // menu:any="";
  //   public nav(navbar:any){
  //     navbar.classList.toggle('active');
  //   } 
  //   public menue(menu:any){
  //    this.navbar = document.querySelector('.navbar');
  
  //    menu.classList.toggle('fa-times');
  //    this.navbar.classList.toggle('active');
  
  //  }
   
}
