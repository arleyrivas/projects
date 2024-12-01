import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAssociateContainerComponent } from './alert-associate-container.component';

describe('AlertAssociateContainerComponent', () => {
  let component: AlertAssociateContainerComponent;
  let fixture: ComponentFixture<AlertAssociateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertAssociateContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertAssociateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
