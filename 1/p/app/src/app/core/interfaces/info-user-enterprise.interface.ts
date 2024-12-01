export interface IInfoUserEnterprise {
  id: string;
  nombre: string,
  descripcion: string,
  tiposEmpresas: string[],
  usuarios: string[],
  companyName: string;
  adminName: string | null;
  adminEmail: string | null;
  tipoEmpresasDTO: any[];
  numMaxEmpleado: string | null;
  privilegiosNotificables: any[];
  lockCompany: string;
  lockCompanyJustification: string;
  allowStaffAnotherAgency: boolean;
  ipRestriction: string;
  ipsRestricted: any[];
  autorizado: string | null;
  celular: string | null;
}
