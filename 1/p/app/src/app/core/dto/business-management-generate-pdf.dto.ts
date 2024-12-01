export interface IGeneratePdfForRequestCustomer {
    requestNumber: string;
    description: string;
    infoCompany: {
        key: string;
        value: string | number;
    }[];
    documents: {
        key: string;
        value: string | number;
    }[];
}