import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { cleanDataUnitNbr, getDataAppointmentDetail, getDataUnitNbr, getVesselVisit, setSelectedUnit } from 'src/app/state/containerized-load/containerized-load.actions';
import { CommunicationService } from '../../services/communication.service';

export interface IBookingInterface {
  nbr: string;
  line: string;
  shipperId: string | null;
  shipperName: string | null;
  agent: string;
  carrierVisit: string;
  carrierVisitName: string;
  inVoyNbr: string;
  outVoyNbr: string;
  vesselId: string;
  vesselName: string;
  visitPhase: string;
  portOfLoading: string;
  portOfDischarge1: string;
  itemId: string;
  quantity: string;
  availableQuantity: string;
  equipmentType: string;
  equipmentTypeDescription: string;
  eqIsoGroup: string;
  isOog: string;
  seqNbr: string | null;
  unitNbr: string;
  transitState: string;
  isoType: string;
  twenty: boolean;
  truckingCompany: string | null;
  hasDebt: boolean;
  hasChargeableUnitEvents: boolean;
  category: string;
  hasPin: boolean;
  hasTruckVisitAppointment: boolean;
  onAccount: boolean;
  hasHolds: boolean | null;
  pin: string | null;
  holdDescription: string | null;
  yard: boolean;
  departed: boolean;
  powerPaidThruDay: string | null;
  storagePaidthruDay: string | null;
  retiro: boolean;
}

export interface IVesselVisit {
  "inVoyNbr": string,
  "id": string,
  "inCallNumber": number,
  "outVoyNbr": string,
  "operatorId": string,
  "vesselId": string,
  "vesselName": string,
  "visitPhase": string,
  "serviceId": string,
  "primeraLinea": number,
  "ultimaLinea": number,
  "fechaCierreDocumental": number,
  "earlyArrival": number,
  "eta": number,
  "ata": number,
  "etd": number
}

export interface IBookingISOType {
  isoType: string;
  quantity: string;
  availableQuantity: string;
}

const vesselVisit: IVesselVisit = {
  "inVoyNbr": "2305E",
  "id": "2303BRAVOX",
  "inCallNumber": 1,
  "outVoyNbr": "2305E",
  "operatorId": "ONE",
  "vesselId": "ONEBRAVO",
  "vesselName": "SEASPAN BRAVO",
  "visitPhase": "INBOUND",
  "serviceId": "NAS",
  "fechaCierreDocumental": 1678806000000,
  "earlyArrival": 1678186800000,
  "eta": 1678878000000,
  "etd": 1679050800000,
  "primeraLinea": 0,
  "ata": 0,
  "ultimaLinea": 0
};

@Component({
  selector: 'app-booking-load-result',
  templateUrl: './booking-load-result.component.html',
  styleUrls: ['./booking-load-result.component.css']
})
export class BookingLoadResultComponent implements OnInit {
  @Input() public data: IBookingInterface[] = [];
  @Input() public vesselVisit: IVesselVisit | null = null;
  public displayedColumns: string[] = [];
  public dataSource: MatTableDataSource<IBookingInterface> = new MatTableDataSource<IBookingInterface>([]);
  public displayedColumnsISO: string[] = [];
  public dataSourceISO: MatTableDataSource<IBookingISOType> = new MatTableDataSource<IBookingISOType>([]);

  constructor(private readonly store: Store,
    private readonly router: Router, private communicationService: CommunicationService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getVesselVisit({ vesselVisitID: this.data[0].carrierVisit }));

    let dataSource: IBookingISOType[] = [];
    let accumulatedDataSource: IBookingISOType[] = [];

    dataSource = this.data.map((element) => ({
      isoType: element.isoType,
      quantity: element.quantity,
      availableQuantity: element.availableQuantity
    }));
    
    dataSource.forEach((element: IBookingISOType) => {
        let currentDescription = element.isoType;
        let isAccumulated = false;

        isAccumulated = !!accumulatedDataSource.filter((element: IBookingISOType) => element.isoType === currentDescription).length;

        if(isAccumulated) {
            accumulatedDataSource = accumulatedDataSource.map((accumulatedElement: IBookingISOType) => {
                const newElement: IBookingISOType = Object.assign({}, accumulatedElement);

                if(accumulatedElement.isoType === element.isoType) {
                    newElement.quantity = (parseInt(element.quantity) + parseInt(accumulatedElement.quantity)).toString();
                    newElement.availableQuantity = (parseInt(element.availableQuantity) + parseInt(accumulatedElement.availableQuantity)).toString();
                }

                return newElement;
            });
        } else {
            accumulatedDataSource = [...accumulatedDataSource, element];
        }
    });
    
    this.displayedColumnsISO = ["isoType", "quantity", "availableQuantity"];
    this.dataSourceISO = new MatTableDataSource(accumulatedDataSource);

    this.displayedColumns = ["container", "idContainer", "inches", "actions"];
    this.vesselVisit = vesselVisit;
    this.dataSource = new MatTableDataSource(this.data);
    
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

  public clickAppointment(element: any): void {
    let appointment: string = element.truck_visit_appt_nbr;
    this.store.dispatch(getDataAppointmentDetail({ truckVisitNbr: appointment }));
    this.communicationService.updateVerificacion(1);
    this.router.navigate(['carga-contenerizada', 'appointment-datails'], {

    });

  }

  public clickMoney(element: any): void {
    if (element.category === "EXPORT"){
      this.store.dispatch(cleanDataUnitNbr());
      this.store.dispatch(setSelectedUnit({ unit: element.unitNbr }));
      this.store.dispatch(getDataUnitNbr({ unitNbr: element.unitNbr }));
      this.router.navigate(['/', 'carga-contenerizada', 'exportacion']);
    }
  }
}
