import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideUsedCarComponent } from './slide-used-car.component';

describe('SlideUsedCarComponent', () => {
  let component: SlideUsedCarComponent;
  let fixture: ComponentFixture<SlideUsedCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideUsedCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideUsedCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
