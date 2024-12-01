import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationUsersAssignRolesComponent } from './administration-users-assign-roles.component';

describe('AdministrationUsersAssignRolesComponent', () => {
  let component: AdministrationUsersAssignRolesComponent;
  let fixture: ComponentFixture<AdministrationUsersAssignRolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationUsersAssignRolesComponent]
    });
    fixture = TestBed.createComponent(AdministrationUsersAssignRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
