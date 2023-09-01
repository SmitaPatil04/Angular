import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formbyanil1Component } from './formbyanil1.component';

describe('Formbyanil1Component', () => {
  let component: Formbyanil1Component;
  let fixture: ComponentFixture<Formbyanil1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formbyanil1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formbyanil1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
