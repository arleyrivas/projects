import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateContainerComponent } from './associate-container.component';

describe('AssociateContainerComponent', () => {
  let component: AssociateContainerComponent;
  let fixture: ComponentFixture<AssociateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociateContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
