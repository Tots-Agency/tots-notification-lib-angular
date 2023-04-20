import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TotsNotification } from '@tots/notification-core';

@Component({
  selector: 'tots-notification-style-one',
  templateUrl: './tots-notification-style-one.component.html',
  styleUrls: ['./tots-notification-style-one.component.scss']
})
export class TotsNotificationStyleOneComponent implements OnInit {
  @Input() notification!: TotsNotification;
  @Output() clickNot = new EventEmitter<TotsNotification>();
  @Output() readNot = new EventEmitter<TotsNotification>();

  backgroundColors = ['#B9FF98', '#98FFE6', '#98A8FF', '#D06CFF', '#F56B8D', '#FFAF82', '#FFF282'];
  randomNumber = 0;

  ngOnInit(): void {
    this.processRandomNumber();
  }

  onCLickNotification() {
    this.notification.is_read = 1;
    this.clickNot.emit(this.notification);
  }

  onClickRead() {
    this.notification.is_read = 1;
    this.readNot.emit(this.notification);
  }

  processRandomNumber() {
    if(this.notification.photoAvatarLetters == undefined||this.notification.photoAvatarLetters == ''){
      return;
    }
    this.randomNumber = this.getSameRandomNumberForLetters(this.notification.photoAvatarLetters);
  }

  getSameRandomNumberForLetters(str: string): number {
    const seed = this.hash(str);
    let x = Math.sin(seed) * 10000;
    x = x - Math.floor(x);
    return Math.floor(x * 7);
  }

  hash(s: string): number {
    let h = 0;
    for (let i = 0; i < s.length; i++) {
      h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    }
    return h;
  }
}
