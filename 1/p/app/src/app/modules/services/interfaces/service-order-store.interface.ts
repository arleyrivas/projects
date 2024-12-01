import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { IServiceOrderResume } from "../components/service-orders-resume/service-orders-resume.component";
import { IServiceAutorityTypes } from "./service-autority-types.interface";
import { IServiceTypeDesignatedOfficial } from "./service-type-designated-official.interface";
import { IServiceTypeInfo } from "./service-type-info.interface";
import { IServiceType } from "./service-type.interface";
import { IVoidDestinationContainerSelected } from "./void-destination-container-selected.interface";
import { IServiceOrdersPDF } from "./service-orders-pdf.interface";
import { IServiceHistoryItem } from "./service-history-item.interface";
import { IServiceHistoryDTO } from "./service-history.dto";

export interface IServiceOrderStore {
  serviceTypes: IServiceType[];
  serviceTypeInfo: IServiceTypeInfo[];
  selectedContainers: IVoidDestinationContainerSelected[];
  autorityTypes: IServiceAutorityTypes | null;
  serviceOrderResume: IServiceOrderResume[];
  designatedOfficials: IServiceTypeDesignatedOfficial[];
  searchedCriteria: string | null;
  saveResult: IRestResult<string>[];
  containers: string[],
  pdfData: IServiceOrdersPDF | null;
  history: IServiceHistoryItem[],
  historyInformation: IServiceHistoryDTO | null,
  historyPage: number;
}
