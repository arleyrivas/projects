import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSearchResultComponent } from './load-search-result.component';

describe('LoadSearchResultComponent', () => {
  let component: LoadSearchResultComponent;
  let fixture: ComponentFixture<LoadSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadSearchResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
