import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerizedLoadResultComponent } from './containerized-load-result.component';

describe('ContainerizedLoadResultComponent', () => {
  let component: ContainerizedLoadResultComponent;
  let fixture: ComponentFixture<ContainerizedLoadResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerizedLoadResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerizedLoadResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
