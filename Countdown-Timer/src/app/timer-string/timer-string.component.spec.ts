import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerStringComponent } from './timer-string.component';

describe('TimerStringComponent', () => {
  let component: TimerStringComponent;
  let fixture: ComponentFixture<TimerStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerStringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
