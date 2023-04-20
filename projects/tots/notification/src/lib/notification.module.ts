/** Angular Core */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Angular Material */
import { MatTooltipModule } from '@angular/material/tooltip';

/** Styles */
import { TotsNotificationStyleOneComponent } from './components/tots-notification-style-one/tots-notification-style-one.component';


@NgModule({
  declarations: [
    
    /** Styles */
    TotsNotificationStyleOneComponent
  ],
  imports: [
    /** Angular Core */
    CommonModule,

    /** Angular Material */
    MatTooltipModule,
  ],
  exports: [
    /** Styles */
    TotsNotificationStyleOneComponent
  ]
})
export class TotsNotificationModule { }
