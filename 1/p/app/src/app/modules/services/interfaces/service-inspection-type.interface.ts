import { IServiceEventTypes } from "./service-event-types.interface";

export interface IServiceInspectionType {
    inspection_type: string;
    event_types: IServiceEventTypes[]
}