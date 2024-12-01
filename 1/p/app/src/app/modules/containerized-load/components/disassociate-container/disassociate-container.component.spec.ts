import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisassociateContainerComponent } from './disassociate-container.component';

describe('DisassociateContainerComponent', () => {
  let component: DisassociateContainerComponent;
  let fixture: ComponentFixture<DisassociateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisassociateContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisassociateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
