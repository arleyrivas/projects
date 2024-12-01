

export interface IHorariosDisponibles {
    quota_rule_gkey: number;
    dlv_quota: number;
    start_date_f: string;
    slot_duration_min: number;
    count: number;  
}

export interface IHorariosDisponiblesCC {
    appt_hour: string;
    contenedores: {tipo: string, valor: number}[];
    countDEM: number;
    countDF: number;
    countREM: number;
    countRF: number;
    dlv_full_quota: number;
    dlv_mty_quota: number;
    ingreso: number;
    quota: number;
    quota_rule_gkey: number;
    rcv_full_quota: number;
    rcv_mty_quota: number;
    retiro: number;
    retiroDTA: number;
    rule_type: string | null;
    slot_duration_min: number;
    start_date: string | null;
    yardBolkQ: number;
}


export interface IAppointmentWeight {
    weight: number;
    existsCompany: number;
    truck: string;
    license: string;
}

export interface IAppointmentCheckHours{
    success: string; 
    result: string,
    error: string;
}

export interface IAppointmentResponseCargoLots{
    state: string;
    nbr: string;
    date: string;
    slotStartTime: string | null;
    truckLicense: string | null;
    truckingCompany: string | null;
    billOfLoading: string;
    blItem: string;
    qty: number;

}

export interface IAppointmentResponse{
    
    state: string;
    nbr: string;
    date: string;
    slotStartTime: string | null;
    truckLicense: string;
    truckingCompany: string;
    driverCardId: string;
    gateAppt: IAppointmentResponseCargoLots[];
    error: string | null;
    
}

