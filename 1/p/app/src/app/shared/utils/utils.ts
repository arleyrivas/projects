import { ICompanyType } from "src/app/core/interfaces/company-type.interface";

export function getFormattedDate() {
    const date = new Date();
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }
  
  

  export function getCurrentDateInString(): string {
    const now = new Date();
  
    const year = now.getFullYear().toString().padStart(4, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Los meses empiezan en 0
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
  
    // Construir el ID numérico concatenando las partes
    return (year + month + day + hours + minutes + seconds + milliseconds);
  }


  export function parseCustomDateStringToDate(dateString: string | null): Date {
    if(dateString != null){ 
      if(!isValidCustomDateFormat(dateString)) return new Date();

      const year = parseInt(dateString.slice(0, 4), 10);
      const month = parseInt(dateString.slice(4, 6), 10) - 1; // Meses en JS empiezan desde 0
      const day = parseInt(dateString.slice(6, 8), 10);
      const hours = parseInt(dateString.slice(8, 10), 10);
      const minutes = parseInt(dateString.slice(10, 12), 10);
      const seconds = parseInt(dateString.slice(12, 14), 10);
      const milliseconds = parseInt(dateString.slice(14, 17), 10);

      return new Date(year, month, day, hours, minutes, seconds, milliseconds);
    } else {
      return new Date();
    }
}

function isValidCustomDateFormat(dateString: string): boolean {
  // Verificar que el string tenga exactamente 17 caracteres y contenga solo dígitos
  return /^\d{17}$/.test(dateString);
}


export function getCompanyTypeName(companyType: string):string {
  if(companyType.toLocaleLowerCase().startsWith('06')) return 'agente';
  if(companyType.toLocaleLowerCase().startsWith('09')) return 'transporte';
  if(companyType.toLocaleLowerCase().startsWith('300')) return 'temporal';
  return 'cliente';
}


export function getCompanyTypeSelected(companyTypes: ICompanyType [] ): ICompanyType {
  const selectedCompany = companyTypes.find(company => company.selected);
  return selectedCompany! ;
}

export function formatLocalDateISO(date = new Date(), timeZone = 'America/Bogota') {
  const options: Intl.DateTimeFormatOptions = {
      timeZone,
      year: 'numeric',       
      month: '2-digit',      
      day: '2-digit',   
      hour12: false       
  };
  return date.toLocaleDateString('sv-SE', options); // Devuelvo la fecha en formato YYYY-MM-DD
}


export function formatDateTime(dateString: string): string {
  // Expresion Reg. para validar que el string no sea null o vacio y que siga el formato ISO de fecha
  const isoDateRegex: RegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d{3})?Z$/;

  if (!dateString || !isoDateRegex.test(dateString)) {
    return ''; 
  }

  return dateString.replace('T', ' ').slice(0, 16);
}


