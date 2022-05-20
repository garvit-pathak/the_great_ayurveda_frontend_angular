import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/service/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
   userReview:any;
  constructor(private reviewservice:ReviewsService) { 
     let did = sessionStorage.getItem("doctorId")
      reviewservice.viewreviewbyid(did).subscribe(data=>{
        this.userReview=data.reviewerDetail
        console.log(this.userReview);
      })
  }

  ngOnInit(): void {
  }

}
