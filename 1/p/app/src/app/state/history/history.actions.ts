import { createAction, props } from "@ngrx/store";
import { IAppointment } from "src/app/core/interfaces/appointment.interface";
import { IHistoryAppointmentsParameters, IHistoryPinParameters } from "src/app/core/interfaces/history-pin-parameters.interface";
import { ITruckPin } from "src/app/core/interfaces/truck-pin.interface";

export const getHistoryPin = createAction(
    "[History] Get History Pin",
    props<{consigneeId: string | null, company: string | null, tipo: string, state: Number, 
        fromDate: string, toDate: string , bl: string | null, 
        hbl: string | null, frghtKind: string | null, page: number}>()
);

export const setHistoryPin = createAction(
    "[History] Set History Pin",
    props<{result: ITruckPin[]}>()
);


export const saveParameters = createAction(
    '[History] Save Parameters',
    props<{ data: IHistoryPinParameters }>()
);

export const updateParameters = createAction(
    '[History] Update Parameters',
    props<{ parameters: IHistoryPinParameters }>()
  );

  export const cleanHistoryPin = createAction(
    "[History] Clean History Pin"
  );

export const saveAppointmentsParameters = createAction(
    '[History] Save Appointments Parameters',
    props<{ data: IHistoryAppointmentsParameters }>()
);

export const updateAppointmentsParameters = createAction(
    '[History] Update Appointments Parameters',
    props<{ parametersAppointments: IHistoryAppointmentsParameters }>()
  );

  export const cleanHistoryAppointments = createAction(
    "[History] Clean History Appointments"
  );

export const getHistoryAppointments = createAction(
    "[History] Get History Appointments",
    props<{plate: string | null, appointmentNbr: string | null,
        fromDate: string, toDate: string , frghtKind: string | null, page: number}>()
);

export const setHistoryAppointments = createAction(
    "[History] Set History Appointments",
    props<{result: IAppointment[]}>()
);

export const reloadHistoryPinComponent = createAction('[History] Reload Parent Component');