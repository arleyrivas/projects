import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IVesselVisit } from 'src/app/core/interfaces/vessel-visit.interface';
import { ContainerizedLoadService } from '../../services/containerized-load.service';
import { Router } from '@angular/router';
import { containerizedLoadFeatureSelector } from 'src/app/state/containerized-load/containerized-load.selectors';
import { getInvoice, getVesselVisit, getDataUnitNbr, getDataAppointmentDetail, cleanDataUnitNbr, setSelectedUnit } from 'src/app/state/containerized-load/containerized-load.actions';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../../services/communication.service';
@Component({
  selector: 'app-containerized-load-result',
  templateUrl: './containerized-load-result.component.html',
  styleUrls: ['./containerized-load-result.component.css']
})
export class ContainerizedLoadResultComponent {
  @Input("data") public dataSource: any = {};
  @Input() public vesselVisit: IVesselVisit | null = null;
  public displayedColumns: string[] = [];

  constructor(private readonly store: Store, private readonly router: Router, private communicationService: CommunicationService) {
  }

  ngOnInit(): void {
    this.displayedColumns = ["container", "idContainer", "inches", "actions"];
    this.store.dispatch(getVesselVisit({ vesselVisitID: this.dataSource[0].carrierVisit }));
  }

  public getMessage(message: string, param?: string): string {
    switch(message) {
      case "modules.containerized-load.hasPin":
        return $localize`:@@9f77c36f810313e86a35c1f1c2f6883e564fc7dca6533cb1bd32162194a01c41: modules.containerized-load.hasPin`
      break;

      case "detached-load.hasChargeableUnitEvents":
        return $localize`:@@b8a7ef72fbd82471b4963324c8615ff32aee8971465c8d7fc8485c30d506130c: modules.detached-load.hasChargeableUnitEvents`
      break;

      case "detached-load.hasDebt-false":
        return $localize`:@@0d9a9b4509684ed85e2051f4ed5a93f98f770afa696e67a01cdb377a20a2740e: modules.detached-load.hasDebt-false`
      break;

      case "detached-load.hasDebt-true":
        return $localize`:@@6f4cabe3f87db6c43f394be94d976073a3f76e58245e37fda4179b5243143d17: modules.detached-load.hasDebt-true`
      break;

      case "detached-load.hasHolds":
        return $localize`:@@92134cc80b78bda7ed66345d1693f6528b8922e374debdbfa0e096ee368485d2: modules.detached-load.hasHolds ${param}:hold:`
      break;

      case "modules.detached-load.storageDaysOwed":
        return $localize`:@@72954f713a4d54227807e6491c7e8c13fac702387efd89ffd53a12317f8fc76b: modules.detached-load.storageDaysOwed`
      break;

      case "modules.detached-load.yard":
        return $localize`:@@ef5756dc90602383d1113290a1081fcec763e93921cc6dffdfd8c02dfd8cb6de: modules.detached-load.yard`
      break;

      case "modules.detached-load.holdConsigneeActive-true":
        return $localize`:@@603598fd51e1293ad213343b1b56de4d99564188a3e45767c83a95368466af32: modules.detached-load.holdConsigneeActive-true`
      break;

      case "modules.detached-load.holdConsigneeActive-null":
        return $localize`:@@e00550740b122e20075306f1819786f3bb7a463c1301702c1283c86b0ecad954: modules.detached-load.holdConsigneeActive-null`
      break;

      case "modules.detached-load.truck_visit_appt_nbr":
        return $localize`:@@c7351ea231bf74b23b6525ce3281d9118fa3e90fff00a0b8231af4ffe02847e1: modules.detached-load.truck_visit_appt_nbr`
      break;

      default:
        return "Mensaje no existe."
      break;
    }
  }

  public getInvoice(invoice: string): void {
    this.store.dispatch(getInvoice({ invoice }));
  }

  public clickMoney(elemet: any): void {
    this.store.dispatch(cleanDataUnitNbr());
    this.store.dispatch(setSelectedUnit({ unit: elemet.unitNbr }));
    this.store.dispatch(getDataUnitNbr({ unitNbr: elemet.unitNbr }));
    this.router.navigate(['/', 'carga-contenerizada', 'importacion']);
  }

  public clickAppointment(elemet: any): void {
    let appointment: string = elemet.truck_visit_appt_nbr;
    this.store.dispatch(getDataAppointmentDetail({ truckVisitNbr: appointment }));
    this.communicationService.updateVerificacion(1);
    this.router.navigate(['carga-contenerizada', 'appointment-datails'], {

    });
  }
}
