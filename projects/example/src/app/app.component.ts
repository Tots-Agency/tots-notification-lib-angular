import { Component } from '@angular/core';
import { TotsNotification } from 'projects/tots/notification-core/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notification = new TotsNotification();
  notification2 = new TotsNotification();

  nots = new Array<TotsNotification>();
  isLoading = false;

  ngOnInit(): void {
    this.notification.title = 'New Furniture Lead';
    this.notification.caption = 'A new furniture Lead #25 has been arrived and require review';
    this.notification.created_at = '2023-05-25 18:00:00';
    this.notification.photoTooltip = 'Sales Module';
    this.notification.photo = 'https://gentle-field-01a36a00f-development.eastus2.2.azurestaticapps.net/assets/img/icons-modules/016-stock exchange app.svg';
    //this.notification.photoIsCircle = true;

    this.notification2.title = 'New Furniture Lead';
    this.notification2.caption = 'A new furniture Lead #25 has been arrived and require review';
    this.notification2.created_at = '2023-05-25 18:00:00';
    this.notification2.photoTooltip = 'Matias Camiletti';
    this.notification2.photo = '';
    this.notification2.photoIsCircle = true;
    this.notification2.photoAvatarLetters = 'MC';

    let not2 = new TotsNotification();
    not2.title = 'New Design Lead';
    not2.caption = 'A new furniture Lead #25 has been arrived and require review';
    not2.created_at = '2023-04-25 18:00:00';
    not2.photoTooltip = 'Sales Module';
    not2.photo = 'https://gentle-field-01a36a00f-development.eastus2.2.azurestaticapps.net/assets/img/icons-modules/016-stock exchange app.svg';

    this.nots.push(this.notification);
    this.nots.push(not2);
    this.nots.push(this.notification);
    this.nots.push(this.notification);
    this.nots.push(not2);
    this.nots.push(not2);
    this.nots.push(not2);
    this.nots.push(not2);
  }
}
