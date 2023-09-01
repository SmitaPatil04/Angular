import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Udemyassignment2Component } from './udemyassignment2.component';

describe('Udemyassignment2Component', () => {
  let component: Udemyassignment2Component;
  let fixture: ComponentFixture<Udemyassignment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Udemyassignment2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Udemyassignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
