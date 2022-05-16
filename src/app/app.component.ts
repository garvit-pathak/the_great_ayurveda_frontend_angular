import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-ayurveda';
  constructor(private userService:UserService){}

  isLoggedIn():boolean{
    if(this.userService.checkToken()){
    return true;
  }
  else{
    return false;
  }
  }
}
