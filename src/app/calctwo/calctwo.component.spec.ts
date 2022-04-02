import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalctwoComponent } from './calctwo.component';

describe('CalctwoComponent', () => {
  let component: CalctwoComponent;
  let fixture: ComponentFixture<CalctwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalctwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalctwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
