import { ICreateBreakbulk } from "../dto/create-breakbulk.dto";
import { IDetachedLoad } from "./detached-load.interface";
import { ICausalCancelationAppointment } from "./ICausalCancelationAppointment.interface";
import { IInvoiceProforma } from "./invoice-proforma.interface";
import { ITruckPin } from "./truck-pin.interface";
import { IVesselVisit } from "./vessel-visit.interface";

export interface IDetachedLoadStore {
    result: IDetachedLoad[];
    vesselVisit: IVesselVisit | null;
    firstSearch: boolean;
    truckVisitNbrData: any;
    invoiceProforma: IInvoiceProforma | null;
    selectedUnits: IDetachedLoad[];
    selectedCustomer: string | null;
    finalizeInvoice: string | null;
    loadedCustomer: string;
    truckResult: ITruckPin[];
    lastSearch: string | null;
    elementsDetachedLoad: string | null;
    causalCancellationAppointment: ICausalCancelationAppointment[] | null;
    responseCancelAppointment: any | null;
}
