import { IServiceInspectionType } from "./service-inspection-type.interface";

export interface IServiceAutorityType {
    authority_type: string;
    inspection_type: IServiceInspectionType[];
    min_staff: string;
    max_staff: string;
    requires_documentation: string;
}
