import { Component, OnInit } from '@angular/core';
import { DiseasesService } from '../service/diseases.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css'],
})
export class DiseasesComponent implements OnInit {
  keywords = '';
  disList: any = [];

  constructor(private diseasesService: DiseasesService) {
    this.diseasesService.search(this.keywords).subscribe((data) => {
      console.log(data);
      this.disList = data;
    });
  }

  ngOnInit(): void {}
}
