import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TotsNotification } from '@tots/notification-core';

@Component({
  selector: 'tots-date-group-topbar-notification',
  templateUrl: './tots-date-group-topbar-notification.component.html',
  styleUrls: ['./tots-date-group-topbar-notification.component.scss']
})
export class TotsDateGroupTopbarNotificationComponent implements OnInit, OnChanges {

  @Input() title: string = 'Notifications';
  @Input() notifications: Array<TotsNotification> = [];

  @Input() isLoading: boolean = true;
  typeLoading = 'square-in-bits';
  colorLoading = '#80bc00';

  @Output() clickReadAll = new EventEmitter<boolean>();

  data = new Array<{ date: string, items: Array<TotsNotification> }>

  ngOnInit(): void {
    this.processItems();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['notifications']){
      this.processItems();
    }
  }

  onClickReadAll() {
    this.notifications.forEach((item) => item.is_read = 1);
    this.clickReadAll.emit(true);
  }

  processItems() {
    this.data = new Array<{ date: string, items: Array<TotsNotification> }>();
    this.notifications.forEach((item) => {
      let date = item.created_at.substring(0, 10);
      let index = this.data.findIndex((d) => d.date == date);
      if (index == -1) {
        this.data.push({ date: date, items: [item] });
      } else {
        this.data[index].items.push(item);
      }
    });
  }

  hideLoading() {
    this.isLoading = false;
  }

  showLoading(type: string = 'square-in-bits', color: string = '#80bc00') {
    this.isLoading = true;
    this.typeLoading = type;
    this.colorLoading = color;
  }
}
