import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/core/interfaces/user.interface";

export const retrieveUser = createAction(
    "[Global] Get User Data"
);

export const saveUser = createAction(
    "[Global] Save User Data",
    props<{ userData: IUser }>()
);

export const logout = createAction(
    "[menu-sidebar] Close session"
);
