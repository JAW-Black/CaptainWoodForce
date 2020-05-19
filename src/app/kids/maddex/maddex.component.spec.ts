import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaddexComponent } from './maddex.component';

describe('MaddexComponent', () => {
  let component: MaddexComponent;
  let fixture: ComponentFixture<MaddexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaddexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaddexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
