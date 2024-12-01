export interface IGeneratePinUnit {
    unit: string;
    size: string;
    shipper?: string;
    operation?: string;
}

export interface IGeneratePinResult {
    nbr?: string;
    pin: string;
    units: IGeneratePinUnit[];
}

export interface ICSGeneratePinUnit {
  weight: number;
  quantity: number;
  destination?: string;
  shipper?: string;
  active?: boolean;
}

export interface ICSGeneratePinResult {
  nbr?: string;
  pin: string;
  createdAt: string;
  units: ICSGeneratePinUnit[];
}

export const unitsMockup: IGeneratePinUnit[] = [
    {
        unit: "BMOU6579231",
        size: "40"
    },
    {
        unit: "BMOU6579231",
        size: "40"
    },
    {
        unit: "BMOU6579231",
        size: "40"
    },
    {
        unit: "BMOU6579231",
        size: "40"
    }
];

export const pinsMockup: IGeneratePinResult[] = [
    {
        pin: "564150",
        units: [
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M"
            }
        ]
    },
    {
        pin: "564150",
        units: [
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M"
            }
        ]
    },
    {
        pin: "564150",
        units: [
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M"
            }
        ]
    },
    {
        pin: "564150",
        units: [
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M"
            }
        ]
    }
];

export const pinsResultMockup: IGeneratePinResult[] = [
    {
        nbr: "BLMSCUBLPRUEBA",
        pin: "564150",
        units: [
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación"
            }
        ]
    },
    {
        nbr: "BLMSCUBLPRUEBA",
        pin: "564150",
        units: [
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación"
            }
        ]
    },
    {
        nbr: "BLMSCUBLPRUEBA",
        pin: "564150",
        units: [
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación"
            }
        ]
    },
    {
        nbr: "BLMSCUBLPRUEBA",
        pin: "564150",
        units: [
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación"
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación"
            }
        ]
    }
];
