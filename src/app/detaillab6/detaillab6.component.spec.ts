import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detaillab6Component } from './detaillab6.component';

describe('Detaillab6Component', () => {
  let component: Detaillab6Component;
  let fixture: ComponentFixture<Detaillab6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detaillab6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detaillab6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
