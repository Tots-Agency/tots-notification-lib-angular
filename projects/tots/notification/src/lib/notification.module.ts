/** Angular Core */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Styles */
import { TotsNotificationStyleOneComponent } from './components/tots-notification-style-one/tots-notification-style-one.component';


@NgModule({
  declarations: [
    
    /** Styles */
    TotsNotificationStyleOneComponent
  ],
  imports: [
    /** Angular Core */
    CommonModule
  ],
  exports: [
    /** Styles */
    TotsNotificationStyleOneComponent
  ]
})
export class TotsNotificationModule { }
