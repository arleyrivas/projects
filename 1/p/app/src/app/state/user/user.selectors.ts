import { createFeatureSelector } from "@ngrx/store";
import { IUser } from "src/app/core/interfaces/user.interface";

export const userFeatureSelector = createFeatureSelector<IUser>("user");
