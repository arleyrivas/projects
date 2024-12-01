export interface IDetachedLoad {
    "unitSequence": number,
    "cargoWeigth": number,
    "cargoQuantity": number,
    "destination": string | null,
    "hasDebt": boolean,
    "finalNbr": string | null,
    "hasChargeableUnitEvents": boolean,
    "ufvGkey": string | null,
    "bl": string,
    "departed": boolean,
    "hasTruckVisitAppointment": boolean,
    "inbound": boolean,
    "storageDaysOwed": number,
    "truckVisit": string | null,
    "unitNbr": string,
    "yard": number,
    "line": string,
    "vesselVisitId": string,
    "hbl": string,
    "vesselDetailId": number,
    "consigneeName": string,
    "loadAgentId": string | null,
    "loadAgentName": string | null,
    "nbr": string,
    "id": string,
    "groupCargo": string,
    "avdGkey": string | null,
    "name": string,
    "hasHolds": boolean,
    "holdDescription": string,
    "truckId": string | null,
    "truckName": string | null,
    "hasPin": boolean,
    "billable": boolean,
    "emailCustomer": string | null,
    "requested_time": string | null,
    "truck_license_nbr": string | null,
    "driver_name": string | null,
    "hasHoldConsignee": boolean,
    "truck_visit_appt_nbr": string | null,
    "driver_license_nbr": string | null,
    "holdConsigneeActive": boolean,
    "holdUnitActive": string | null,
    "isHazard": string | null,
    "typeDocument": string | null,
    "siteAppointment": string | null,
    "onAccount": boolean,
    "pinParaEliminar": string | null,
    "invisible": boolean,
    consigneeId: string | null;
}
