import { createFeatureSelector } from "@ngrx/store";
import { IPagination } from "src/app/core/interfaces/pagination.interface";

export const paginationFeatureSelector = createFeatureSelector<IPagination>("pagination");
