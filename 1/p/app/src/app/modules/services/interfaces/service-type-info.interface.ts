import { FormControl, FormGroup } from "@angular/forms";

export interface IServiceTypeInfo {
    line: string;
    consigneeId: string | null;
    consigneeName: string | null;
    shipperId: string | null;
    shipperName: string | null;
    agent: string;
    carrierVisit: string;
    carrierVisitName: string;
    vesselId: string;
    vesselName: string;
    ufv_gkey: number | null;
    unit_gkey: number | null;
    cl_gkey: number | null;
    transit_state: string | null;
    isoType: string | null;
    twenty: boolean | null;
    unitNbr: string;
    unit_imped_road: string | null;
    weight_hbl: number | null;
    quantity_hbl: number | null;
    selected: string | null;
    destiny: string | null;
    Active: number;
    bl_hbl_book: string | null;
    Type_service: string;
    checkboxFormControl?: FormControl;
    selectFormControl?: FormControl;
}
