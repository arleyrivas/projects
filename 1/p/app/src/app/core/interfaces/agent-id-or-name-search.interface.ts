import { IAgentIdOrNameContactInfo } from "./agent-id-or-name-contact-info.interface";

export interface IAgentIdOrNameSearch {
  id: string;
  name: string;
  contactInfo: IAgentIdOrNameContactInfo[];
  notes: string;
  creditStatus: string;
  insuranceExpires?: number;
}
