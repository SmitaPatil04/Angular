import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpracticeComponent } from './spractice.component';

describe('SpracticeComponent', () => {
  let component: SpracticeComponent;
  let fixture: ComponentFixture<SpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
