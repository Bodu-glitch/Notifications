import {Component, Input} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  @Input() User!: UserModel;

}
