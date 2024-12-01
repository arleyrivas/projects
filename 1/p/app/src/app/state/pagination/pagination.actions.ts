import { createAction } from "@ngrx/store";

export const previous = createAction(
    "[Pagination] previous Pagination"
);

export const next = createAction(
    "[Pagination] Next Pagination"
);

export const reset = createAction(
    "[Pagination] Reset Pagination"
);
