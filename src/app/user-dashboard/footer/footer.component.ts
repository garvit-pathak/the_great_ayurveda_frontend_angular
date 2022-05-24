import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Query } from 'src/app/model/query';
import { QueryService } from 'src/app/service/query.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private _query: QueryService,private taoster: ToastrService,
    ) {}
  query1: Query = new Query('', '');
  ngOnInit(): void {}
  public send() {
    this._query.querySend(this.query1).subscribe((data) => {
      console.log(data);
      if(data){
          this.taoster.success("Send Your Query","Thank You")
      }
    });
  }
}
