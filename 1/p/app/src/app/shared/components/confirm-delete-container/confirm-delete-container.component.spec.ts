import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteContainerComponent } from './confirm-delete-container.component';

describe('ConfirmDeleteContainerComponent', () => {
  let component: ConfirmDeleteContainerComponent;
  let fixture: ComponentFixture<ConfirmDeleteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeleteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
