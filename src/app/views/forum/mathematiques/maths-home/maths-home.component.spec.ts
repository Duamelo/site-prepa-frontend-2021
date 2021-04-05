import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsHomeComponent } from './maths-home.component';

describe('MathsHomeComponent', () => {
  let component: MathsHomeComponent;
  let fixture: ComponentFixture<MathsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
