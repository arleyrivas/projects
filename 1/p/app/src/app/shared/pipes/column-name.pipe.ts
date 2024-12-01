import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnName'
})
export class ColumnNamePipe implements PipeTransform {

  transform(column: string): string {
    const columnNames: { [key: string]: string } = {
      INGRESO_TERMINAL: 'INGRESO TERMINAL',
      SALIDA_TERMINAL: 'SALIDA TERMINAL',
      CARGUE: 'CARGA',
      DESCARGUE: 'DESCARGA',
      EARLYARRIVAL: 'LLEGADA',
      nit: 'NIT',
      company: 'EMPRESA',
      start_date: 'FECHA INICIO MANDATO',
      end_date: 'FECHA FIN MANDATO',
      Salida_Terminal: 'Salida Terminal',
      Vessel: 'Motonave',
      Visit: 'Visita',
      Status: 'Estado',
      Freigh_Kind: 'Tipo',
      ISO: 'ISO Type',
      Quantity_Booking: 'Cantidad del Item',
      Associated_Quantity: 'Unidades Asociadas',
      Available_Quantity: 'Cantidad Disponible',
      Pod: 'POD',
      Requisito: 'Requisitos',



      // Agrega otros nombres personalizados aquí
    };
    return columnNames[column] || column;
  }

}
