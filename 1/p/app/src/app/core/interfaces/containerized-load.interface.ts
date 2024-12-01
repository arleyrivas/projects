export interface IContainerizedLoad {
  selected?: boolean;
  "blNumber": string,
  "carrierVisit": string,
  "line": string,
  "carrierVisitName": string,
  "agent": string,
  "inVoyNbr": string,
  "id_VV": string,
  "outVoyNbr": string,
  "operatorId": string,
  "vesselId": string,
  "vesselName": string,
  "visitPhase": string,
  "unitNbr": string,
  "isoType": string,
  "hasDebt": boolean,
  "hasChargeableUnitEvents": boolean,
  "yard": boolean,
  "departed": string,
  "inbound": string,
  "twenty": boolean,
  "consigneeId": string,
  "consigneeName": string,
  "hasHolds": boolean,
  "holdDescription": string,
  "storageDaysOwed": number,
  "onAccount": boolean,
  "category": string,
  "hasPin": boolean,
  "hasTruckVisitAppointment": string | null,
  "emailCustomer": string | null,
  "requested_time": string | null,
  "truck_license_nbr": string | null,
  "driverName": string | null,
  "hasHoldConsignee": boolean,
  "truck_visit_appt_nbr": string | null,
  "holdConsigneeActive": boolean | null,
  "loadAgentId": string | null,
  "loadAgentName": string | null,
  "dataType": string,
  "final_Nbr": string,
  "pinParaEliminar": string | null,
  "invisible": boolean,
  "bookingNbr": string | null,
  "isHazard": boolean,
  "shipperId": string | null,
  "siteAppointment": string | null,
  "truckVisitNbr": string | null,
  "appointmentDate": string | null,
  "containers": string[],
  "oea": string | null,
  "isReefer": boolean,
  "nbr": string | null,
  "eqStatus": string | null,
  "shipperName": string | null,
  "agentId": string | null,
  "portOfLoading": string | null,
  "portOfDischarge1": string | null,
  "reference": string | null,
  "quantity": string | null,
  "availableQuantity": string | null,
  "equipmentType": string | null,
  "equipmentTypeDescription": string | null,
  "heightMm": number | null,
  "lengthMm": number | null,
  "eqIsoGroup": string | null,
  "isOog": string | null,
  "grossWeight": number | null,
  "oogLeftCm": string | null,
  "oogRightCm": string | null,
  "oogTopCm": string | null,
  "oogFrontCm": string | null,
  "seqNbr": string | null,
  "transitState": string | null,
  "truckingCompany": string | null,
  "pin": string | null,
  "powerPaidThruDay": string | null,
  "archiso": string | null,
  "tempReqdC": string | null,
  "ventRequiredUnit": string | null,
  "ventRequiredValue": string | null,
  "oogBackCm": string | null,
  "grossWeiht": number | null,
  "ogg": {} | null,
  "reefer": {} | null,
  "visitDummy": boolean | null,
  "hazards": {} | null,
  "retiro": boolean,
  "eroNbr": string | null;
  "edoNbr": string | null;
}


  export interface IPinContainerized {
    "unitNbr": string;
    "twenty": boolean;
    "isoType": string;
    "isHazard": boolean;
  }

  export interface IPinSearch{
    
      "id": string;
      "createdAt": string;
      "createdByLDAP": string;
      "blNbr": string;
      "pinNbr": string;
      "bkgNbr": string;
      "eroNbr": string;
      "edoNbr": string;
      "active": boolean;
      "deleted": boolean;
      "truckingCompanyLDAP": string;
      "truckingCompanyNameLDAP": string;
      "pinContainerized": IPinContainerized[];
      "type_pin": string;
  
  }

 
  export interface IBookingSearch{
    "gkey": string;
    "bookingNbr": string;
    "departed": boolean;
    "hasChargeableUnitEvents": boolean;
    "hasDebt": boolean;
    "hasTruckVisitAppointment": boolean;
    "inbound": boolean;
    "isoType": string;
    "storageDaysOwed": number;
    "twenty": boolean;
    "unitNbr": string;
    "yard": string;
    "earlyArrival": string;
    "carrier": string;
    "fechaCierreDocumental": string;
    "line": string;
    "shipperId": string;
    "vesselVisitId": string;
    "isReefer": boolean;
    "isHazard": boolean;
    "typeDocument": string;
    "siteAppointment": string;
    "pinParaEliminar": string;
    "invisible": boolean;
    "visitDummy": boolean | null;
    "carrierVisit": string | null;
  }

  export interface IHazards{
    "reference": string;
    "hazard": string;
    "imdg": string;
    "imdgDescription": string;
    "ltdQtyFlag": string
  }

  export interface IContainerizedTwo{
    quantity: string | null;
    availableQuantity: string  | null;
    equipmentType: string | null;
    equipmentTypeDescription: string | null;
    heightMm: number | null;
    lengthMm: number  | null;
    eqIsoGroup: string | null;
    isOog: string | null;
    seqNbr: string | null;
    archiso: string | null;
    reference: string   | null;
    grossWeight: number | null; // Ya que el valor viene de un formulario, puede ser null
    ogg: OogDetails;
    reefer: {} | null;
    hazards: {} | null;
   
    
    
  }

  export interface OogDetails {
    isOog: string | null;
    oogFrontCm: string | null;
    oogLeftCm: string | null;
    oogRightCm: string | null;
    oogTopCm: string | null;
  }
  
  export interface ReeferDetails {
    tempReqdc: string | null;
    
  }

  
