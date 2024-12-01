export interface ICargoLots{
    id: string | null, 
    peso: number | null, 
    cantidad: number | null, 
    destino: string | null, 
    separacion: string | null, 
    deudas: string | null, 
    permisos: string | null,
    facturacion: string | null, 
    cargoLotId: string | undefined, 
    truckId: string | null, 
    truckName: string | null
}

export interface CargoItem {
    apptNbr: string;
    billoflading: string;
    blitem: string;
    cargoQuantity: number;
    cargoWeigth: number;
    cargoLotId: string;
    manifestNbr: string;
    numero?: number;
    pin: string;
  }

export interface IDataAppointmentCS {
    "nbr": string,
    "appointmentDate": string,
    "driver": {"cardId":string,"name": string,"license": string},
    "truck": string,
    "cargoLots": CargoItem[],
    "pinInfoList": string[],
    "manifestNbr": string,
    "isHazard": string,
    "informationAppointment": string
};