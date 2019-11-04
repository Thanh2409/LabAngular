import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detaillab8Component } from './detaillab8.component';

describe('Detaillab8Component', () => {
  let component: Detaillab8Component;
  let fixture: ComponentFixture<Detaillab8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detaillab8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detaillab8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
