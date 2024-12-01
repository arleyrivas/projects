export interface IQuotas{
    id: string | null;
    start: string;
    end: string;
    count: number;
    hoursBefore: number;
}

export interface IDisponibilidadCitas {
    date: string;
    quotas: IQuotas[];
    id: string | null;
}