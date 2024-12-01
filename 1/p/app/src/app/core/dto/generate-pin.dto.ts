import { IGeneratePinEmailNotificationDTO } from "./generate-pin-email-notification.dto"
import { IGeneratePinUnitsTrucksDTO } from "./generate-pin-units-trucks.dto"

export interface IGeneratePinDTO {
    nbr: string;
    isUnit: boolean;
    isBooking: boolean;
    isEdo: boolean;
    isEro: boolean;
    consignee: string;
    unitsTrucks: IGeneratePinUnitsTrucksDTO[];
    frghtKind: string;
    isGroup: number;
    emailNotification: IGeneratePinEmailNotificationDTO;
}

export interface INotificationGeneratePinDTO {
    userId: string | undefined;
    userfullName: string;
    bl: string;
    consigneeId: string; 
    consigneeName: string;
    agent: string;
    truckName: string;
    nbr: string;
}


export interface INotificationGeneratePinDTOCS {
    userId: string | undefined;
    createdByLDAP: string;
    blNbr: string;
    consigneeId: string | null;
    consigneeName: string;
    truckId: string;
    truckingCompanyNameLDAP: string;
    totalLots: number;
    cargoWeigth: number;
    cargoQuantity: number;
    createdByCompanyNameLDAP: string | undefined;
}
