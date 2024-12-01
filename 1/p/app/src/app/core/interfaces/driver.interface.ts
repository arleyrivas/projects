export interface IDriver {
    cardId: string;
    name: string;
    license: string;
    licenseExpiration: number;
    
  }

export interface IDriverValidation{
  data: string;
}