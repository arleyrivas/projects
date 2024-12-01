import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationSecondPasswordMainComponent } from './administration-second-password-main.component';

describe('AdministrationSecondPasswordMainComponent', () => {
  let component: AdministrationSecondPasswordMainComponent;
  let fixture: ComponentFixture<AdministrationSecondPasswordMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationSecondPasswordMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationSecondPasswordMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
