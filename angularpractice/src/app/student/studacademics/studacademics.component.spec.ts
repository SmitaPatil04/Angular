import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudacademicsComponent } from './studacademics.component';

describe('StudacademicsComponent', () => {
  let component: StudacademicsComponent;
  let fixture: ComponentFixture<StudacademicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudacademicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudacademicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
