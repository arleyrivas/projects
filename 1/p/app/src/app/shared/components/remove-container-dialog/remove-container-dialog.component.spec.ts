import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveContainerDialogComponent } from './remove-container-dialog.component';

describe('RemoveContainerDialogComponent', () => {
  let component: RemoveContainerDialogComponent;
  let fixture: ComponentFixture<RemoveContainerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveContainerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveContainerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
