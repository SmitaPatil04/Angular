import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractdirctComponent } from './practdirct.component';

describe('PractdirctComponent', () => {
  let component: PractdirctComponent;
  let fixture: ComponentFixture<PractdirctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PractdirctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PractdirctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
