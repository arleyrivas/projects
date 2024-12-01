export interface IAdministrationRole {
  id: string;
  nombre: string;
  code: string;
  descripcion: string;
  businessCategory?: string | null;
  selected?: boolean;
}
