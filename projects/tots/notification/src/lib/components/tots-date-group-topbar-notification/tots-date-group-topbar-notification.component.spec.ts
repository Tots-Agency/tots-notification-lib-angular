import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsDateGroupTopbarNotificationComponent } from './tots-date-group-topbar-notification.component';

describe('TotsDateGroupTopbarNotificationComponent', () => {
  let component: TotsDateGroupTopbarNotificationComponent;
  let fixture: ComponentFixture<TotsDateGroupTopbarNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsDateGroupTopbarNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsDateGroupTopbarNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
