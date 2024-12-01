export interface IAgentRepresentationItem {
  agentId: string;
  agentName: string;
  companyId: string | null;
  companyRole: string | null;
  startDate: number;
  endDate: number;
  oea: boolean;
  companyName: string | null;
  onAccount: boolean;
}
