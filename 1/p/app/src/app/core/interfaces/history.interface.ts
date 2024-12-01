import { IAppointment } from "./appointment.interface";
import { IHistoryAppointmentsParameters, IHistoryPinParameters } from "./history-pin-parameters.interface";
import { ITruckPin } from "./truck-pin.interface";

export interface IHistoryStore {
    result: ITruckPin[];
    reloadFlag: boolean;
    parameters: IHistoryPinParameters | null;
    resultAppointments: IAppointment[];
    parametersAppointments: IHistoryAppointmentsParameters | null;
}