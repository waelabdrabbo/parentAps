import { Component } from '@angular/core';
import { UsersService } from './users/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parentAps';
  constructor(private usersService: UsersService) {}
}
