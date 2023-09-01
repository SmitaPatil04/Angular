import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpractComponent } from './formpract.component';

describe('FormpractComponent', () => {
  let component: FormpractComponent;
  let fixture: ComponentFixture<FormpractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormpractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormpractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
