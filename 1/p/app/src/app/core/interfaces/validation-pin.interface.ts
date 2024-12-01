export interface IValidationPin {
    agente: string | null;
    destination: string | null;
    hbl: string;
    isGroup: string;
    pinParaEliminar: string | null;
}

export interface IPinContainerized{
    "unitNbr": string;
    "twenty": boolean;
    "isoType": string;
}

export interface IvalidationPinContainerized {
    blNbr: string | null;
    edoNbr: string | null;
    eroNbr: string;
    pinContainerized: IPinContainerized[];
    pinNbr: string
}