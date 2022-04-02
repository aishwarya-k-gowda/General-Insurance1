import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcfourComponent } from './calcfour.component';

describe('CalcfourComponent', () => {
  let component: CalcfourComponent;
  let fixture: ComponentFixture<CalcfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
