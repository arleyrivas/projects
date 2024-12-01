export interface IAdministrationCreateUserDTO {
  empresa: {
     id: string;
  },
  userName: string;
  licencia: string;
  nombres: string;
  apellidos: string;
  correo: string;
  celular: string;
  cargo: string;
  telexNumber: string;
  info: string;
  activo: string;
  shadowFlag: string;
  createdBySAC: boolean;
}
