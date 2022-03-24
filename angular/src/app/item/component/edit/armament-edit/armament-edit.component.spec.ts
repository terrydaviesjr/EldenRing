import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmamentEditComponent } from './armament-edit.component';

describe('ArmamentEditComponent', () => {
  let component: ArmamentEditComponent;
  let fixture: ComponentFixture<ArmamentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmamentEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmamentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
