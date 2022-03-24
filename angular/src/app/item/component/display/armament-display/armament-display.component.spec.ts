import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmamentDisplayComponent } from './armament-display.component';

describe('ArmamentDisplayComponent', () => {
  let component: ArmamentDisplayComponent;
  let fixture: ComponentFixture<ArmamentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmamentDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmamentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
