import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NevaehComponent } from './nevaeh.component';

describe('NevaehComponent', () => {
  let component: NevaehComponent;
  let fixture: ComponentFixture<NevaehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NevaehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NevaehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
