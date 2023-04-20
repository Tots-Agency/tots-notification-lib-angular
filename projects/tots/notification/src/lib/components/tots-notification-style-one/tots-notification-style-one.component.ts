import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TotsNotification } from '@tots/notification-core';

@Component({
  selector: 'tots-notification-style-one',
  templateUrl: './tots-notification-style-one.component.html',
  styleUrls: ['./tots-notification-style-one.component.scss']
})
export class TotsNotificationStyleOneComponent {
  @Input() notification!: TotsNotification;
  @Output() clickNot = new EventEmitter<TotsNotification>();
  @Output() readNot = new EventEmitter<TotsNotification>();

  onCLickNotification() {
    this.notification.is_read = 1;
    this.clickNot.emit(this.notification);
  }

  onClickRead() {
    this.notification.is_read = 1;
    this.readNot.emit(this.notification);
  }
}
