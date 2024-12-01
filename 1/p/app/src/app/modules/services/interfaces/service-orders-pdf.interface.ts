export interface IServiceOrdersPDF {
  idOrderServices: string;
  company: string;
  userCreator: string;
  dateCreation: string;
  nbr: string;
  client: string;
  service: string;
  authority: string;
  typeInspection: string;
  crewRequired: string;
  containers: string;
  observations: string;
  officials: string[];
  tagContOrHbl: string;
};
