import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
search: any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 public navigate(event:any){
   this.search = event.target.value ;
   this.router.navigate(['diseases',this.search]);
 }
}
