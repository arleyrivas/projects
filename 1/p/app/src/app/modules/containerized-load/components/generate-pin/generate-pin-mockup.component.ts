export interface IGeneratePinUnit {
  id?: number;
  unit: string;
  size: string;
  shipper?: string;
  operation?: string;
  active: boolean;
}

export interface IGeneratePinResult {
  id?: number;
  nbr?: string;
  pin: string;
  units: IGeneratePinUnit[];
}

export const unitsMockup: IGeneratePinUnit[] = [
    {
        unit: "BMOU6579231",
        size: "40",
        active: true
    },
    {
        unit: "BMOU6579231",
        size: "40",
        active: true
    },
    {
        unit: "BMOU6579231",
        size: "40",
        active: true
    },
    {
        unit: "BMOU6579231",
        size: "40",
        active: true
    }
];

export const pinsMockup: IGeneratePinResult[] = [
    {
        pin: "564150",
        units: [
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                active: true
            }
        ]
    },
    {
        pin: "564150",
        units: [
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                active: true
            }
        ]
    },
    {
        pin: "564150",
        units: [
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                active: true
            }
        ]
    },
    {
        pin: "564150",
        units: [
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                active: true
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
                operation: "Importación",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación",
                active: true
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
                operation: "Importación",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación",
                active: true
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
                operation: "Importación",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación",
                active: true
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
                operation: "Importación",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación",
                active: true
            },
            {
                unit: "BMOU6579231",
                size: "40",
                shipper: "8990904481 Transporte T.D.M",
                operation: "Importación",
                active: true
            }
        ]
    }
];
