import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlanaComponent } from './edit-plana.component';

describe('EditPlanaComponent', () => {
  let component: EditPlanaComponent;
  let fixture: ComponentFixture<EditPlanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
