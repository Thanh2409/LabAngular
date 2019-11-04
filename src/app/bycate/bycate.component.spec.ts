import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BycateComponent } from './bycate.component';

describe('BycateComponent', () => {
  let component: BycateComponent;
  let fixture: ComponentFixture<BycateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BycateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BycateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
