export interface CustomerRequest {
    principalNit: string;
    secondaryNit: string;
}

export interface FormDataCustomer {
    tratamiento: string;
    tipoPersona: string;
    nit: string;
    razonSocial: string;
    sigla: string;
    direccion: string;
    codigoDistrito: string;
    pais: string;
    departamento: string;
    ciudad: string;
    telefonoMovil: string;
    correoRepresentante: string;
    correoFactura1: string;
    correoFactura2: string;
    nombreContactoOperativo: string;
    telefonoMovilContacto: string;
    correoContacto: string;
    nombreContactoTesoreria: string;
    telefonoMovilTesoreria: string;
    correoTesoreria1: string;
    correoTesoreria2: string;
  }
  
  export interface IValueChangeCustomer {
    [key: string]: {
      new: string | number | null;
      old: string | number | null;
    };
  }


  export interface ICreateCustomerRequest {
    requestId: string | null;
    customerId: string | null;
    creatorId?: string | null;
    creatorUserId?: string| null;
    createdAt: Date | null;
    contactName?: string| null;
    contactEmail?: string| null;
    contactPhone?: string | null;
    requestStatus: string| null;
    requestInfo?: string| null;
    infoStatus: string| null;
    requestFlow?: string | null;
    finalizedAt?: Date | null;    
    approvalUser?: string | null;
    approvalAt?: Date | null;  
    representedByAgent?: number | null;
    requestType?: String | null;  

  }

  export interface IRequestDetails {
    gkeyRequest: string;
    request: string;         // Solicitud
    last_update: string;     
    creator: string;         
    status: string;        
    nit: string;             
    name: string;            
    observations?: string | null;    
    information?: string | null;
    info_status: string | null;
    request_flow?: string | null;
    view?: boolean;            
  }
  
  

  export interface IRequestCompany {
    nit: string;
    startDate: string;
    endDate: string;
    status: string;
  }


  export interface IRespondeRequestCompany {
    gkeyRequest: string;
    request:      string;
    last_update:   string;
    creator:      string;
    status:       string;
    nit:          string;
    name:         string;
    observations?: string | null;
    information?: string | null;
    info_status: string;
    request_flow?: string | null;
}

export interface FormData {
  new: string | number | null;
  old: string | number | null;
}

export interface ParsedObject {
  [key: string]: FormData;
}

export interface IformaDataPresentationResum {
  key: string;
  value: string 
}

export interface IRequestFlow {
  user: string;
  remark: string;
  date: string;
  state: string;
}



export interface IInfoCustomerRequest {
  requestId: string;
  Id: string;
  tratamiento: string;
  tipoPersona: string;
  nit: string;
  razonSocial: string;
  sigla: string;
  direccion: string;
  distrito: string;
  ciudad: string;
  departamento: string;
  pais: string;
  telefono1: string;
  email: string;
  correoFE1: string;
  correoFE2: string;
  nombreC1: string;
  telefonoC1: string;
  mailC1: string;
  nombreC2: string;
  telefonoC2: string;
  mailC2: string;
  request_info: string;
  represented_by_agent: string;
  request_type: string;
}



export interface ICustomerRequestGkey {
  gkeyCustomerRequest: string;
}