import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap, Observable } from "rxjs";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { RoleService } from "src/app/core/auth/services/role.service";
import { IUser } from "src/app/core/interfaces/user.interface";

@Injectable()
export class UserEffects {

    constructor(
        private readonly roleService: RoleService,
        private readonly actions$: Actions,
        private readonly aesService: AESEncryptionUtilService
    ) { }
}
