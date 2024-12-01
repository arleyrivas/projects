export interface IRequestFilterSac {
  requestType: string;
  requestStatus: string;
  startDate: string;
  endDate: string;
}



export interface IRequestDetailsToSac {
  requestNumber: string;
  requestDateTime: string;
  requestingCompany: string;
  updatedCompany: string;
  sacAnalyst: string; 
  lastUpdateDateTime: string; 
  status: string;
  documentsLinkIcon: string;
  detailIndicator: boolean;
  showDetails?: boolean;
  selected?: boolean;
  requestInfo: FieldChange[];
  emailUserRequest: string;
}

export interface  IRequestDetailSAC {
  gkeyRequest:number;
  gkeyCustomer: number;
  requestNumber: string; // Número de Solicitud
  requestDateTime: string; // Fecha y Hora de la Solicitud
  requestingCompany: string; // Empresa Solicitante
  updatedCompany: string; // Empresa que Actualizó la Solicitud
  status: string; // Estado de la Solicitud
  documents: string; // Documentos relacionados con la Solicitud
  requestInfo?: string; // Información modificada en la Solicitud //TODO esto es opcional, revisar las demás properties, manejarlo a tráves de una clase para inicializarlas en ''
  modifiedByUser: string; // Usuario creo la Solicitud
  contactEmail: string; // Correo Electrónico de Contacto
  request_flow?: string; // Flujo de la Solicitud

  requestInfoForDetail?: FieldChange[];
  sacAnalyst?: string; //Nota: esta información considero la puedo extraer en el front del campo request_flow
  lastUpdateDateTime?: Date; //Nota: esta información considero la puedo extraer en el front del campo request_flow
  selected?: boolean;
  requestType?: string; //Define el tipo de solicitud que se guardo de acuerdo a la consulta de typos de documentos al momento de registrar la solcitud 
}

export interface FieldChange {
  fieldName: string;
  oldValue?: string;
  newValue: string; 
}

export interface IRequestFlow {
  user: string;
  remark: string;
  date: Date;
  state: string;
}


export interface IRequestToUpdateBySac {
  id: number;
  requestStatus: string;
  requestFlow: string;
  finalizedAt?: Date | null;   
}


export interface ICustomerApprovedChangeRequest {
  requestNumber: string;
  requestDateTime: string;
  nit: string;
  updatedCompany: string;
  updatedClientProperties?: IformaValuesChangeApproved [];
  sacAnalyst?: string;
  lastUpdateTime?: string;
  requestInfo: string;
  requestFlow: string;
}

export interface ICustomerApprovedChangeRequestForDataSource {
  requestNumber: string;
  requestDateTime: string;
  nit: string;
  updatedCompany: string;
  fieldChanges: string;
  newValue: string;
  sacAnalyst?: string;
  lastUpdateTime?: string;
}

export interface IformaValuesChangeApproved {
  key: string;
  value: string 
}


export interface IRequestByChangeStatus {
  request: IRequestDetailSAC,
  messageTojustification: string,
  showLinkForSendEmail: boolean
}