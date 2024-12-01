export interface IAppointment {
    appointmentNbr: string;
    placa: string; 
    conductor: string; 
    license: string;
    cita: string; 
    state: string;
    tipoTrx: string; 
    manifestNbr: string; 
    siteAppointment: string | null;
}