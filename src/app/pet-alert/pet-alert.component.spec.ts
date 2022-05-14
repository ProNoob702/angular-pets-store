import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAlertComponent } from './pet-alert.component';

describe('PetAlertComponent', () => {
  let component: PetAlertComponent;
  let fixture: ComponentFixture<PetAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
