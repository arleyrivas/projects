import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAdministrationIpAddressDTO } from 'src/app/core/dto/administration-ip-address.dto';
import { IAdministrationIpAddress } from 'src/app/core/interfaces/administration-ip.interface';
import { deleteIpAddress, getAllIpAddress } from 'src/app/state/administration/administration.actions';
import { administrationFeatureSelector } from 'src/app/state/administration/administration.selector';
import { AdministrationIpDialogComponent } from '../administration-ip-dialog/administration-ip-dialog.component';
import { MatSort } from '@angular/material/sort';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-administration-ip',
  templateUrl: './administration-ip.component.html',
  styleUrls: ['./administration-ip.component.css']
})
export class AdministrationIpComponent implements OnInit {
  @ViewChild(MatSort) public sort: MatSort = new MatSort();

  public ips: IAdministrationIpAddress[] = [];
  public dataSource: MatTableDataSource<IAdministrationIpAddress> = new MatTableDataSource<IAdministrationIpAddress>([]);
  public displayedColumns: string[] = [];
  public destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.router.navigate(['/', 'administracion', 'ip-restriction']);

    this.store.dispatch(getAllIpAddress({
      payload: {
        companyId: null,
        action: "SEARCH",
        ips: []
     }
    }));

    this.store.select(administrationFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: store => {
        this.displayedColumns = ["select", "ip", "description"];
        this.ips = store.address.map((item, index) => {
          const newItem = Object.assign({}, item);

          newItem.id = index;

          return newItem;
        });

        this.dataSource = new MatTableDataSource<IAdministrationIpAddress>(this.ips);
        this.dataSource.sort = this.sort;
      },
      error: error => console.error(error)
    });
  }

  public matCheckboxChangeSelectAll(checked: boolean): void {
    if(checked) {
      this.ips = this.ips.map(value => {
        const newValue = Object.assign({}, value);

        newValue.selected = true;

        return newValue;
      });
    } else {
      this.ips = this.ips.map(value => {
        const newValue = Object.assign({}, value);

        newValue.selected = false;

        return newValue;
      });
    }

    this.dataSource = new MatTableDataSource<IAdministrationIpAddress>(this.ips);
  }

  public matCheckboxChange(checked: boolean, element: IAdministrationIpAddress): void {
    if(checked) {
      this.ips = this.ips.map(value => {
        const newValue = Object.assign({}, value);

        if(element.id === newValue.id) newValue.selected = true;

        return newValue;
      });
    } else {
      this.ips = this.ips.map(value => {
        const newValue = Object.assign({}, value);

        if(element.id === newValue.id) newValue.selected = false;

        return newValue;
      });
    }

    this.dataSource = new MatTableDataSource<IAdministrationIpAddress>(this.ips);
  }

  public delete(): void {
    const matDialog = this.matDialog.open(AdministrationIpDialogComponent);

    matDialog.afterClosed().subscribe({
      next: value => {
        if(value) {
          const payload: IAdministrationIpAddressDTO = {
            action: "DELETE",
            companyId: null,
            ips: this.ips.filter(value => value.selected)
          };

          this.store.dispatch(deleteIpAddress({ payload }));
        }
      },
      error: error => console.error(error)
    });
  }

  public filter(value: Event): void {
    const filterValue = (value.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public formatIP(ip: string, type: string | null): string {
    const cleanIP: string = ip.replaceAll("(", "").replaceAll(")", "").replaceAll("\\", "").replace("$", "");

    if(type) {
      const splitedIP: string[] = cleanIP.split(".");

      return `${splitedIP[0]}.${splitedIP[1]}.${splitedIP[2]}.${type}`
    }
    else return cleanIP;
  }

  public goToModule(module: string): void {
    this.router.navigate(["/", module]).then(() => {
      const currentRoute = this.router.url;

      this.router.navigateByUrl("/", { skipLocationChange: true }).then(() =>
      this.router.navigate([currentRoute])
    );
    });
  }

}
