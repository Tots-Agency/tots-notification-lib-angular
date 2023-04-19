import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCoreComponent } from './notification-core.component';

describe('NotificationCoreComponent', () => {
  let component: NotificationCoreComponent;
  let fixture: ComponentFixture<NotificationCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationCoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
