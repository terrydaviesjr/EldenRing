import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshEditComponent } from './ash-edit.component';

describe('AshEditComponent', () => {
  let component: AshEditComponent;
  let fixture: ComponentFixture<AshEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AshEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
