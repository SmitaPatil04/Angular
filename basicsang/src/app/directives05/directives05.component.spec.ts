import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directives05Component } from './directives05.component';

describe('Directives05Component', () => {
  let component: Directives05Component;
  let fixture: ComponentFixture<Directives05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Directives05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Directives05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
