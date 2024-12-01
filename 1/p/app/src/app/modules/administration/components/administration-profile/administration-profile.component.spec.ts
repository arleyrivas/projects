import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationProfileComponent } from './administration-profile.component';

describe('AdministrationProfileComponent', () => {
  let component: AdministrationProfileComponent;
  let fixture: ComponentFixture<AdministrationProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
