import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTransportComponent } from './type-transport.component';

describe('TypeTransportComponent', () => {
  let component: TypeTransportComponent;
  let fixture: ComponentFixture<TypeTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTransportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
