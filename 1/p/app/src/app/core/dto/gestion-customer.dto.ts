export interface ICustomerDTO {
    tipoPresentacion?: string;
    id?: string | null;
    tratamiento?: string;
    tipoPersona?: string;
    nit?: string;
    razonSocial?: string;
    sigla?: string;
    direccion?: string;
    distrito?: string;
    ciudad?: string;
    departamento?: string;
    pais?: string;
    telefono1?: string;
    email?: string;
    correoFE1?: string;
    correoFE2?: string;
    nombreC1?: string;
    telefonoC1?: string;
    mailC1?: string;
    nombreC2?: string;
    telefonoC2?: string;
    mailC2?: string;
    request_flag: string;
  }
  

 export interface CustomerData {
  tratamiento?: string;
  tipoPersona?: string;
  nit?: string;
  razonSocial?: string;
  sigla?: string;
  direccion?: string;
  codigoDistrito?: string;
  pais?: string;
  departamento?: string;
  ciudad?: string;
  telefonoMovil?: string;
  correoRepresentante?: string;
  correoFactura1?: string;
  correoFactura2?: string;
  nombreContactoOperativo?: string;
  telefonoMovilContacto?: string;
  correoContacto?: string;
  nombreContactoTesoreria?: string;
  telefonoMovilTesoreria?: string;
  correoTesoreria1?: string;
  correoTesoreria2?: string;
}