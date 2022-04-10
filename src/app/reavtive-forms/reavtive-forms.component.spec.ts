import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReavtiveFormsComponent } from './reavtive-forms.component';

describe('ReavtiveFormsComponent', () => {
  let component: ReavtiveFormsComponent;
  let fixture: ComponentFixture<ReavtiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReavtiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReavtiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
