import { IServiceBlDTO } from "../dto/service-bl.dto";
import { IServiceImoDTO } from "../dto/service-imo.dto";
import { IServicePackagetypesDTO } from "../dto/service-package-types.dto";

export interface IServicesStore {
  blSearch: IServiceBlDTO | null;
  imo: IServiceImoDTO[];
  packageTypes: IServicePackagetypesDTO[];
  selectedCustomer: string | null;
  selectedBl: string | null;
}
