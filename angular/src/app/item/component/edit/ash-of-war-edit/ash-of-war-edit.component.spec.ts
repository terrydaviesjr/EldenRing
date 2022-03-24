import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshOfWarEditComponent } from './ash-of-war-edit.component';

describe('AshOfWarEditComponent', () => {
  let component: AshOfWarEditComponent;
  let fixture: ComponentFixture<AshOfWarEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshOfWarEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AshOfWarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
