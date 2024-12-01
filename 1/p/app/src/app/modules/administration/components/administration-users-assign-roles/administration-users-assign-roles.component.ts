import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { IAssignRoleDTO } from 'src/app/core/dto/assign-role.dto';
import { IAdministrationRole } from 'src/app/core/interfaces/administration-role.interface';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IInfoUser } from 'src/app/core/interfaces/info-user.interface';
import { assignRoles, getCompanyRoles, setCompanyRoles } from 'src/app/state/administration/administration.actions';
import { administrationFeatureSelector } from 'src/app/state/administration/administration.selector';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

@Component({
  selector: 'app-administration-users-assign-roles',
  templateUrl: './administration-users-assign-roles.component.html',
  styleUrls: ['./administration-users-assign-roles.component.css']
})
export class AdministrationUsersAssignRolesComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) public sort!: MatSort;
  public apiGatewaySubscription: Subscription = new Subscription();
  public administrationSubscription: Subscription = new Subscription();
  public user!: IInfoUser;
  public dataSource: MatTableDataSource<IAdministrationRole> = new MatTableDataSource<IAdministrationRole>([]);
  public displayedColumns: string[] = ["code", "descripcion", "state"];
  public userRoles: IAdministrationRole[] = [];
  public selectedRoles: IAdministrationRole[] = [];
  public defaultRoles: IAdministrationRole[] = [];
  public adminRole: IAdministrationRole | null = null;
  public userInfo!: IAPIGatewayStore;
  public destroy$: Subject<void> = new Subject<void>();


  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService
  ) {}

  ngOnInit(): void {
    this.apiGatewaySubscription = this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: store => {
        this.userInfo = store;
        this.store.dispatch(getCompanyRoles({ user: (store.empresa?.id as string) }));
      },
      error: error => console.error(error)
    });

    this.administrationSubscription = this.store.select(administrationFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: store => {
        const companyRoles = store.companyRoles.filter(item => !item.businessCategory);

        this.defaultRoles = store.companyRoles.filter(item => item.businessCategory === "default");
        this.user = store.selectedUser.filter(item => item.userName === store.selectedUserName)[0];

        const selectedRoles = companyRoles.map(value => {
          const newValue = Object.assign({}, value);

          this.user.roles.forEach(value => {
            if(value.nombre === newValue.nombre) {
              this.selectedRoles = [...this.selectedRoles, newValue];
              newValue.selected = true;
            }

            if(value.nombre === "administrador_portal")
              this.adminRole = store.companyRoles.filter(item => item.businessCategory === "Admin")[0];
          });

          return newValue;
        });

        this.dataSource = new MatTableDataSource<IAdministrationRole>(selectedRoles);
        this.dataSource.sort = this.sort;
      },
      error: error => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.apiGatewaySubscription.unsubscribe();
    this.administrationSubscription.unsubscribe();
  }

  public filter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public matCheckboxCheck(checked: boolean, role: IAdministrationRole): void {
    if(checked) {
      this.selectedRoles = [...this.selectedRoles, role];
    } else {
      this.selectedRoles = this.selectedRoles.filter(value => value.nombre !== role.nombre);
    }
  }

  public  limpiarCadena(cadena: string) {
    return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  public submit(): void {
    const payload: IAssignRoleDTO = {
      userName: this.user.userName,
      correo: this.user.correo,
      roles: [
        ...this.defaultRoles,
        ...this.selectedRoles
      ]
    };

    if(this.adminRole) payload.roles = [...payload.roles, this.adminRole];
    //hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "ADM_GU_AR")[0].notificable
    //console.log("hasnotification: ", this.userInfo.privileges.filter(value => value.privilegeId === "ADM_GU_AR")[0].notificable)
    const rolesUnicos: { [key: string]: IAdministrationRole } = {};
    payload.roles.forEach(role => {
      role.descripcion = this.limpiarCadena(role.descripcion);
      rolesUnicos[role.nombre] = role; 
    });
    const rolesSinDuplicados = Object.values(rolesUnicos);
    this.store.dispatch(assignRoles({
      payload,
      hasNotification: true,
      notificationData: this.base64EncryptionUtilService.encrypt(JSON.stringify({
        userNameLogueado: this.userInfo.userName, // Usuario que está logueado
        nit: this.userInfo.empresa?.id,// ID Usuario
        userName: payload.userName,
        fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,// Nombre y Apellido del usuario logueado
        roles: rolesSinDuplicados// Roles asignados al usuario
      })),
      privilege: "ADM_GU_AR"
    }));
    this.store.dispatch(setCompanyRoles({ roles: [] }));
    this.cancel();
  }

  public cancel(): void {
    this.router.navigate(['/', 'administracion']);
  }
}
