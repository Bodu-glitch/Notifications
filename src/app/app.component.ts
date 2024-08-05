import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NotificationsComponent} from "./components/notifications/notifications.component";
import {UserServiceService} from "../Services/user.service.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotificationsComponent, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'notifications';

  constructor(public userService: UserServiceService) {
  }
}
