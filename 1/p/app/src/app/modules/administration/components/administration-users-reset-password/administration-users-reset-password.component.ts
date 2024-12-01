import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { privileges } from 'src/app/core/privileges.enum';
import { resetUserPassword } from 'src/app/state/administration/administration.actions';
import { administrationFeatureSelector } from 'src/app/state/administration/administration.selector';

@Component({
  selector: 'app-administration-users-reset-password',
  templateUrl: './administration-users-reset-password.component.html',
  styleUrls: ['./administration-users-reset-password.component.css']
})
export class AdministrationUsersResetPasswordComponent implements OnInit {

  public privileges: typeof privileges = privileges;
  public user!: any;
  public destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.store.select(administrationFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: store => {
        this.user = store.selectedUser.filter(item => item.userName === store.selectedUserName)[0];
      },
      error: error => console.error(error)
    });
  }

  public submit(): void {
    this.store.dispatch(resetUserPassword({ user: this.user.userName }));
  }

  public cancel(): void {
    this.router.navigate(['/', 'administracion']);
  }
}
