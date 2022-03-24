import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicItemEditComponent } from './basic-item-edit.component';

describe('BasicItemEditComponent', () => {
  let component: BasicItemEditComponent;
  let fixture: ComponentFixture<BasicItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicItemEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
