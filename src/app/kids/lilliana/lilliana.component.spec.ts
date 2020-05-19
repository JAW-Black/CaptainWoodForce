import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LillianaComponent } from './lilliana.component';

describe('LillianaComponent', () => {
  let component: LillianaComponent;
  let fixture: ComponentFixture<LillianaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LillianaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LillianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
