import { IValidationMessages } from 'src/app/shared/utils/interfaces/validations-mesagge.interfaces';

let campoRequerido = 'Campo requerido';
let emailNoValido = 'El formato del correo electrónico no es valido';

export const VALIDATION_MESSAGE_BUSINESS_MANAGEMENT: IValidationMessages = {
    tratamiento: [{ type: 'required', message: campoRequerido }],
    tipoPersona: [{ type: 'required', message: campoRequerido }],
    nit: [
        { type: 'required', message: campoRequerido },
        // { type: 'minlength', message: 'Longitud permitida es de 10 dígitos' },
        // { type: 'maxlength', message: 'Longitud permitida es de 10 dígitos' },
        { type: 'pattern', message: 'Longitud permitida es de 10 dígitos' },
    ],
    razonSocial: [
        { type: 'minlength', message: 'Longitud mínima es de 5 caracteres' },
        { type: 'required', message: campoRequerido },       
        { type: 'maxlength', message: 'Longitud máxima es de 60 caracteres' }
    ],
    sigla: [     
        { type: 'required', message: campoRequerido },
        { type: 'minlength', message: 'Longitud mínima es de 5 caracteres' },
        { type: 'maxlength', message: 'Longitud máxima es de 10 caracteres' }
    ],
    direccion: [ 
        { type: 'minlength', message: 'Longitud mínima es de 5 caracteres' },
        { type: 'maxlength', message: 'Longitud máxima es de 68 caracteres' }
    ],
    codigoDistrito: [     
        { type: 'required', message: campoRequerido },
        // { type: 'minlength', message: 'Longitud mínima es de 1 caracteres' },
        // { type: 'maxlength', message: 'Longitud máxima es de 10 caracteres' },
        { type: 'pattern', message: 'Longitud máxima es de 10 dígitos' }
    ],
    pais: [],
    departamento: [     
        { type: 'required', message: campoRequerido }
    ],
    ciudad: [     
        { type: 'required', message: campoRequerido }
    ],
    telefonoMovil: [
        { type: 'required', message: campoRequerido },
        { type: 'pattern', message: 'El número debe ser de 10 dígitos' }
    ],
    correoRepresentante: [
        { type: 'required', message: campoRequerido },
        { type: 'minlength', message: 'Longitud mínima es de 5 caracteres' },
        { type: 'maxlength', message: 'Longitud máxima es de 50 caracteres' },
        { type: 'pattern', message: emailNoValido }
    ],
    correoFactura1: [
        { type: 'required', message: campoRequerido },
        { type: 'minlength', message: 'Longitud mínima es de 5 caracteres' },
        { type: 'maxlength', message: 'Longitud máxima es de 50 caracteres' },
        { type: 'pattern', message: emailNoValido }
    ],
    correoFactura2: [
        { type: 'minlength', message: 'Longitud mínima es de 5 caracteres' },
        { type: 'maxlength', message: 'Longitud máxima es de 50 caracteres' },
        { type: 'pattern', message: emailNoValido },
    ],
    nombreContactoOperativo: [
        { type: 'required', message: campoRequerido },
        { type: 'minlength', message: 'Longitud mínima es de 3 caracteres' },
        { type: 'maxlength', message: 'Longitud máxima es de 69 caracteres' },
        { type: 'pattern', message: 'Valor no valido' }
    ],
    telefonoMovilContacto: [
        { type: 'required', message: campoRequerido },
        { type: 'pattern', message: 'El número debe ser de 10 dígitos' },
    ],
    correoContacto: [
        { type: 'required', message: campoRequerido },
        { type: 'minlength', message: 'Longitud mínima es de 5 caracteres' },
        { type: 'maxlength', message: 'Longitud máxima es de 50 caracteres' },
        { type: 'pattern', message: emailNoValido }
    ],
    nombreContactoTesoreria: [
        { type: 'required', message: campoRequerido },
        { type: 'minlength', message: 'Longitud mínima es de 3 caracteres' },
        { type: 'maxlength', message: 'Longitud máxima es de 69 caracteres' },
        { type: 'pattern', message: 'Valor no valido' }
    ],
    telefonoMovilTesoreria: [
        { type: 'required', message: campoRequerido },
        { type: 'pattern', message: 'El número debe ser de 10 dígitos' }
    ],
    correoTesoreria1: [
        { type: 'required', message: campoRequerido },
        { type: 'minlength', message: 'Longitud mínima es de 5 caracteres' },
        { type: 'maxlength', message: 'Longitud máxima es de 50 caracteres' },
        { type: 'pattern', message: emailNoValido}
    ],
    correoTesoreria2: [
        { type: 'minlength', message: 'Longitud mínima es de 5 caracteres' },
        { type: 'maxlength', message: 'Longitud máxima es de 50 caracteres' },
        { type: 'pattern', message: emailNoValido }
    ],
};
