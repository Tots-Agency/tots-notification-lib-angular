import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsNotificationStyleOneComponent } from './tots-notification-style-one.component';

describe('TotsNotificationStyleOneComponent', () => {
  let component: TotsNotificationStyleOneComponent;
  let fixture: ComponentFixture<TotsNotificationStyleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsNotificationStyleOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsNotificationStyleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
