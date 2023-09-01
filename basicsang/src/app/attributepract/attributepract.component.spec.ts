import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributepractComponent } from './attributepract.component';

describe('AttributepractComponent', () => {
  let component: AttributepractComponent;
  let fixture: ComponentFixture<AttributepractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributepractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributepractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
