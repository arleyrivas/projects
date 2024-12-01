import { IServiceTypeInfo } from "./service-type-info.interface";

export interface IVoidDestinationContainerSelected {
    serviceOrder: string | null;
    voidDestination: string | null;
    serviceTypeInfo: IServiceTypeInfo;
}
