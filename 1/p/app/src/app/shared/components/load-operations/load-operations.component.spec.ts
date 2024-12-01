import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadOperationsComponent } from './load-operations.component';

describe('LoadOperationsComponent', () => {
  let component: LoadOperationsComponent;
  let fixture: ComponentFixture<LoadOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
