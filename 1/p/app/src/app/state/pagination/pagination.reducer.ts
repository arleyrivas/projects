import { createReducer, on } from "@ngrx/store";
import { IPagination } from "src/app/core/interfaces/pagination.interface";
import { next, previous, reset } from "./pagination.actions";

export const initialState: IPagination = {
    skip: 1,
    amount: 40
};

export const paginationReducer = createReducer(
    initialState,
    on(previous, (state) => ({ skip: --state.skip,amount: state.amount })),
    on(next, (state) => ({ skip: ++state.skip,amount: state.amount })),
    on(reset, (state) => ({ skip: 1, amount: 40 }))
);
