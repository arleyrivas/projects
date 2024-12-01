export interface IHistoryPinParameters {
    consigneeId: string | null;
    company: string | null;
    tipo: string;
    state: number;
    fromDate: string;
    toDate: string;
    bl: string | null;
    hbl: string | null ;
    frghtKind: string | null;
    page: number;
    cleanSelectedState: boolean;
  }

  export interface IHistoryAppointmentsParameters {
    frghtKind: string | null;
    plate: string | null;
    appointmentNbr: string | null;
    fromDate: string;
    toDate: string;
    page: number;
    cleanSelectedState: boolean;
  }
