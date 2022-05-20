import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend-ayurveda';
  constructor(
    private userService: UserService,
    private taoster: ToastrService
  ) {}

  isLoggedIn(): boolean {
    if (this.userService.checkToken()) {
      return true;
    } else {
      this.taoster.warning('somethink went wrong');
      return false;
    }
  }
}
