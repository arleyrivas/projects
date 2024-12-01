import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSearcherComponent } from './agent-searcher.component';

describe('AgentSearcherComponent', () => {
  let component: AgentSearcherComponent;
  let fixture: ComponentFixture<AgentSearcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentSearcherComponent]
    });
    fixture = TestBed.createComponent(AgentSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
