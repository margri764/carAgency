import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeromileComponent } from './zeromile.component';

describe('ZeromileComponent', () => {
  let component: ZeromileComponent;
  let fixture: ComponentFixture<ZeromileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeromileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeromileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
