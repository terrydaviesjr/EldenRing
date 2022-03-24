import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcSearchComponent } from './npc-search.component';

describe('NpcSearchComponent', () => {
  let component: NpcSearchComponent;
  let fixture: ComponentFixture<NpcSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
