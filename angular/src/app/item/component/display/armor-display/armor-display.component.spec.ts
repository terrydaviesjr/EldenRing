import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorDisplayComponent } from './armor-display.component';

describe('ArmorDisplayComponent', () => {
  let component: ArmorDisplayComponent;
  let fixture: ComponentFixture<ArmorDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmorDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
