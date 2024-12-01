  export interface UploadFileInterfaces {
    type: string;
    status:string;
    file: File;
    isLoad:boolean;
    icon: string;
    document:InfoFile;
  }

  export interface AlertMessage {
    showAlert: boolean;
    message: string;
    clase:string;
  }

  export interface IDocument {
    id: number
    nbr: string
    path: string
    createdAt: number
    active: boolean
    locked: boolean
    lockedDate: any
    type: IType
    files: IFile[]
    companyName: any
    comments: any
    observations: string
    createdBy: string
    companyId: string
    owner: string
    ownerId: string
    lastUploadFileDate: any
    revised: number
    role: string
    notificador: string
    newRegister: boolean
    lockedBy: string
    approved: boolean
    typeCompany: any
    mail: any
    contactPerson: any
    phoneNumber: any
    rejected: boolean
    requestTime: string
    idCustomerRequest: any
  }
  
  export interface IType {
    id: number
    type: string
    filesName: IFilesName[]
  }
  
  export interface IFilesName {
    id?: number;
    name: string;
    order?: number;
    file_order: number;
    obligatorio: string;
    request_type?: string;
  }
  
  export interface IFile {
    id: number
    state: IState
    files: InfoFile[] 
    fileName: IFileName
    addedFiles: any
  }
  
  export interface IState {
    id: number
    state: string
  }
  
  export interface InfoFile {
    id?: number
    fileName: string
    createdAt?: number
    createdBy?: string
    companyId?: string
    updateAt?: number
    updateBy?: string
    approved?: boolean
    approvedAt?: number
    approvedBy?: string
    rejected?: boolean
    rejectedAt?: number
    rejectedBy?: string
    rejectReason?: any
    companyName?: string
    path?: string
    deleted?: boolean
  }
  
  export interface IFileName {
    id: number
    name: string
    order: number
  }
  
  export interface IRevision {
    user: string
    date: string
    note: string
  }