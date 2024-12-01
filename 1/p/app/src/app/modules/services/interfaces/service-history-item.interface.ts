import { IServiceHistoryInformation } from "./service-history-information.interface";

export interface IServiceHistoryItem {
    "bl_hbl_booking": string,
    "id_cliente": string,
    "nombre_cliente": string,
    "serviceOrderInfo": IServiceHistoryInformation[],
    "mostrar": boolean,
    "icono_expand": string,
};
