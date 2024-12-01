export interface IEquipmentType {
  archetype: string;
  description: string;
  heightMm: number;
  id: string;
  isoGroup: string;
  lengthMm: number;
  reefer: {
    isControlledAtmosphere: string;
    isSuperFreeze: string;
    isTemperatureControlled: string;
    rfrType: string;
  };
  safeWeightKg: number;
  tareWeightKg: number;
  widthMm: number;
}