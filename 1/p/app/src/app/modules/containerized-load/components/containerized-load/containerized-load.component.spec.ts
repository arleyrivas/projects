import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerizedLoadComponent } from './containerized-load.component';

describe('ContainerizedLoadComponent', () => {
  let component: ContainerizedLoadComponent;
  let fixture: ComponentFixture<ContainerizedLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerizedLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerizedLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
