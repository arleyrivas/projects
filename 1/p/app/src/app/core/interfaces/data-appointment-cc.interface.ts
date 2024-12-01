export interface IContainer{
    number: string,
    container: string,
    size: number,
    transation: string
    numberFile?: number,
    transType?: string,
    pinNbr?: string,
    equipmentType?: string,
    line?: string,



}

export interface IDataAppointmentCC{
    nbr: string,
    appointmentDate: string,
    driver: {"cardId":string,"name": string,"license": string},
    truck: string,
    containers: IContainer[],
    manifestNbr: string,
    isHazard: string,
    firstAppointmentImportOrder: string,
    firstAppointmentExportOrder: string,
    secondAppointmentImportOrder: string,
    secondAppointmentExportOrder: string,
    siteAppointment: string,
}