import { IInvoiceCreate } from "../dto/invoice-create.dto";
import { IBookingInterface } from "./booking.interface";
import { IContainerizedLoad } from "./containerized-load.interface";
import { ICustomerContract } from "./customer-contract.interface";
import { IInvoiceManage } from "./invoice-manage.interface";
import { IInvoiceProforma } from "./invoice-proforma.interface";
import { ITruckPin } from "./truck-pin.interface";
import { IVesselVisit } from "./vessel-visit.interface";

export interface IContainerizedLoadStore {
    result: IContainerizedLoad[];
    resultBooking: IBookingInterface[];
    vesselVisit: IVesselVisit | null;
    firstSearch: boolean;
    firstBookingSearch: boolean;
    selectedInvoice: IInvoiceManage | null;
    unitNbrData: any;
    truckVisitNbrData: AppointmentDetails | null;
    customerContract: ICustomerContract | null;
    invoiceProforma: IInvoiceProforma | null;
    selectedContainers: IContainerizedLoad[] | IBookingInterface[];
    selectedCustomer: string | null;
    loadedCustomer: string;
    selectedUnit: string | null;
    truckResult: ITruckPin[];
    lastSearch: string | null;
    operationStuck: boolean;
    elementsContainerizedLoad: string | null;
    setDocumentacionContainer: {
        showDocumentation: boolean;
        nbr: string;
    } | null;
}

export interface AppointmentDetails {
    secondTransTypeImport: string;
    firstTransTypeImport: string;
    appointmentDate: string;
    canceled: string;
    companyIdLdap: string;
    createdByLDAP: string;
    cardId: string;
    license: string;
    name: string;
    firstAppointmentEdo: string;
    firstAppointmentEro: string;
    firstAppointmentExport: string;
    firstAppointmentExportOrder: string;
    firstAppointmentImport: string;
    firstAppointmentImportOrder: string;
    firstContainerEdo: string;
    firstContainerEdoTwenty: string;
    firstContainerEro: string;
    firstContainerEroTwenty: string;
    firstContainerExport: string;
    firstContainerExportTwenty: string;
    firstContainerImport: string;
    firstContainerImportTwenty: string;
    firstEdoNbr: string;
    firstEroNbr: string;
    id: string;
    pinNbr: string;
    secondAppointmentEdo: string;
    secondAppointmentEro: string;
    secondAppointmentExport: string;
    secondAppointmentExportOrder: string;
    secondAppointmentImport: string;
    secondAppointmentImportOrder: string;
    secondContainerEdo: string;
    secondContainerEdoTwenty: string;
    secondContainerEro: string;
    secondContainerEroTwenty: string;
    secondContainerExport: string;
    secondContainerExportTwenty: string;
    secondContainerImport: string;
    secondContainerImportTwenty: string;
    secondEdoNbr: string;
    secondEroNbr: string;
    truck: string;
    truckVisitNbr: string;
    isHazard: string;
    skipEmptyRule: string;
    manifestNbr: string | null;
  }
  
