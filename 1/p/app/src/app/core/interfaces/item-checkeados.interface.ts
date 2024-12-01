export interface IItemCheckeados {
    data: { [key: string]: boolean };
    cargoWeigth: { [key: string]: number };
    pin: string;    
    hbl: string;
    unds: number;
    unitSequence: number;
    placa: string;
    unitNbr: string;
}

export interface IItemCheckeadosContenerized {
    data: { [key: string]: boolean };
    pin: string | null;    
    booking: string | null;
    category: string;
}

export interface ISetContenedorType{
    value: number;
    operation: string; 
    id: string; 
    category: string;
    pinOrBooking: string | null;
    holdConsigneeActive: boolean;
    siteAppointment: string;
}