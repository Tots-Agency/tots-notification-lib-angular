/** Angular Core */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Angular Material */
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

/** Tots Libraries */
import { TotsLoadingModule } from '@tots/loading';

/** Styles */
import { TotsNotificationStyleOneComponent } from './components/tots-notification-style-one/tots-notification-style-one.component';

/** Components */
import { TotsDateGroupTopbarNotificationComponent } from './components/tots-date-group-topbar-notification/tots-date-group-topbar-notification.component';



@NgModule({
  declarations: [
    
    /** Styles */
    TotsNotificationStyleOneComponent,

    /** Components */
    TotsDateGroupTopbarNotificationComponent
  ],
  imports: [
    /** Angular Core */
    CommonModule,

    /** Angular Material */
    MatTooltipModule,
    MatButtonModule,

    /** Tots Libraries */
    TotsLoadingModule
  ],
  exports: [
    /** Styles */
    TotsNotificationStyleOneComponent,

    /** Components */
    TotsDateGroupTopbarNotificationComponent
  ]
})
export class TotsNotificationModule { }
