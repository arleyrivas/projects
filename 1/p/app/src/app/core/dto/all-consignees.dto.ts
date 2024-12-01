import { IAgentIdOrNameContactInfo } from "../interfaces/agent-id-or-name-contact-info.interface"
import { IAgentRepresentation } from "../interfaces/agent-representation.interface";

export interface IAllConsigneesDTO {
  id: string;
  name: string;
  contactInfo: IAgentIdOrNameContactInfo;
  notes: string;
  creditStatus: string;
  agentRepresentations: IAgentRepresentation;
}
