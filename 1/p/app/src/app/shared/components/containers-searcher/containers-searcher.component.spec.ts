import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersSearcherComponent } from './containers-searcher.component';

describe('ContainersSearcherComponent', () => {
  let component: ContainersSearcherComponent;
  let fixture: ComponentFixture<ContainersSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainersSearcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainersSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
