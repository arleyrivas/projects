export interface Customer {
    id?: number | null; // id es opcional porque puede ser undefined al crear un nuevo customer
    nit?: string;
    treatment?: string; // 'tratamiento'
    personType?: string; // 'tipoPersona'
    initials?: string; // 'sigla'
    districtCode?: string; // 'codigoDistrito'
    representativeEmail?: string; // 'correoRepresentante'
    operationalContactName?: string; // 'nombreContactoOperativo'
    operationalContactMobile?: string; // 'telefonoMovilContacto'
    operationalContactEmail?: string; // 'correoContacto'
    treasuryContactName?: string; // 'nombreContactoTesoreria'
    treasuryContactMobile?: string; // 'telefonoMovilTesoreria'
    secondaryTreasuryEmail?: string; // 'correoTesoreria2'
    requestNumber: string; // 'requestNumber' 
    lastSapUpdate?: Date | null; // 'lastSapUpdate' 
    lastCompletedUpdateDate?: Date | null; // 'LastCompletedUpdateDate' 
  }