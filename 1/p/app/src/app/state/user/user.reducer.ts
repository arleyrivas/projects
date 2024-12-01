import { createReducer, on } from "@ngrx/store";
import { IUser } from "src/app/core/interfaces/user.interface";
import { logout, saveUser } from "./user.actions";

export const initialState: IUser = {
    userName: "",
    name: "",
    lastName: "",
    email: "",
    companyName: "",
    permissions: [],
    n4UserId: "",
    active: false,
    nit: ""
};

export const userReducer = createReducer(
    initialState,
    on(saveUser, (state, action) => Object.assign({}, action.userData)),
    on(logout, (state, action) => ({
        userName: "",
        name: "",
        lastName: "",
        email: "",
        companyName: "",
        permissions: [],
        n4UserId: "",
        active: false,
        nit: ""
}))
);
