export interface IServiceOrderPayload {
    "type": string;
    "authorizedStaff": string;
    "nit": string;
    "event": string;
    "unit": string | null;
    "serviceDetails": string;
    "userNotes": string;
}
