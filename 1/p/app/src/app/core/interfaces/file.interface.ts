export interface IFile {
    id: number,
    fileName: string,
    createdAt: string,
    createdBy: string,
    companyId: string,
    updateAt: number,
    updateBy: string,
    approved: boolean,
    approvedAt: number,
    approvedBy: string,
    rejected: boolean,
    rejectedAt: number,
    rejectedBy: string,
    rejectReason: string,
    companyName: string,
    path: string,
    deleted: boolean
}
