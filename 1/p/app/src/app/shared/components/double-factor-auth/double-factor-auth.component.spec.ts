import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleFactorAuthComponent } from './double-factor-auth.component';

describe('DoubleFactorAuthComponent', () => {
  let component: DoubleFactorAuthComponent;
  let fixture: ComponentFixture<DoubleFactorAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoubleFactorAuthComponent]
    });
    fixture = TestBed.createComponent(DoubleFactorAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
