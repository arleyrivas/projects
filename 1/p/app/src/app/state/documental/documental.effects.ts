import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { NgScrollbar } from "ngx-scrollbar";
import { catchError, EMPTY, map, mergeMap, of } from "rxjs";
import { IDocumentationInformation } from "src/app/core/interfaces/documentation-information.interface";
import { IDocumentation } from "src/app/core/interfaces/documentation.interface";
import { IPagination } from "src/app/core/interfaces/pagination.interface";
import { DocumentalService } from "src/app/modules/documental/services/documental.service";
import { cleanDocumentations, getAllDocumentation, resetDocumentations, resetDocumentationsSuccessfully } from "./documental.actions";
import { Store } from "@ngrx/store";
import { reset } from "../pagination/pagination.actions";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";

@Injectable()
export class DocumentalEffects {

    getAllDocumentation$ = createEffect(() => this.actions$.pipe(
        ofType("[Documental] Get All Documentations"),
        mergeMap((action: { pagination: IPagination }) =>
            {
              return this.documentalService.getAllDocumentation(action.pagination.skip, action.pagination.amount).pipe(
                mergeMap((result: string) => {
                  const decryptedResponse = JSON.parse(this.aesEncryptionUtilService.decrypt(result));

                  return of(decryptedResponse);
                }),
                catchError(error => {
                  console.error(error);

                  return EMPTY;
                })
              )
            }
        ),
        map((documentations: IDocumentation[]) => ({ type: "[Documental] Save Documentations", documentations })),
        catchError(_ => EMPTY)
    ));

    searchDocumentation$ = createEffect(() => this.actions$.pipe(
        ofType("[Documental] Search Documentations"),
        mergeMap((action: { nbr: string }) =>
          this.documentalService.searchDocumentation(action.nbr).pipe(
            mergeMap((result: string) => {
              return of(JSON.parse(this.aesEncryptionUtilService.decrypt(result)));
            }),
            catchError(error => {
              console.error(error)

              return EMPTY;
            })
          )
        ),
        map((documentations: IDocumentation[]) => {
            return ({ type: "[Documental] Save an Documentation", documentations });
        }),
        catchError(_ => EMPTY)
    ));

    getDocumentationInformation$ = createEffect(() => this.actions$.pipe(
        ofType("[Documental] Get information of documentation"),
        mergeMap((action: { document: IDocumentation }) =>
            this.documentalService.getDocumentationInformation(action.document.id).pipe(
              catchError((error: { error?: { error: string }, message?: string, code?: string}) => {
                  this.matSnackBar.open(
                      error.error?.error ? error.error?.error : "Ha ocurrido un error",
                      "",
                      {
                          duration: 3000,
                          verticalPosition: "top",
                          panelClass: ["error-snackbar"]
                      }
                  );

                  return EMPTY;
              })
            )),
        map((information: IDocumentationInformation) => ({ type: "[Documental] Save information of documentation", information })),
        catchError(_ => EMPTY)
    ));

    approveDocumentation$ = createEffect(() => this.actions$.pipe(
        ofType("[Documental] Approve Documentation"),
        mergeMap((action: { information: IDocumentationInformation }) =>
            this.documentalService.approveDocumentation(action.information).pipe(
              catchError((error) => {
                this.matSnackBar.open("Se produjo un error al querer obtener la documentación. Por favor comuníquese con la terminal.", "",
                  {
                    verticalPosition: "top",
                    duration: 3000,
                    panelClass: ["error-snackbar"]
                  }
                );

                return EMPTY;
              })
            )
        ),
        map((information: IDocumentationInformation) => {
          this.documentalService.getExecSearch().next(null);

          return ({ type: "[Documental] Save Approve Documentation", information });
        }),
        catchError(_ => EMPTY)
    ));

    disapproveDocumentation$ = createEffect(() => this.actions$.pipe(
        ofType("[Documental] Disapprove Documentation"),
        mergeMap((action: { information: IDocumentationInformation }) =>
            this.documentalService.notApproveDocumentation(action.information).pipe(
              catchError((error) => {
                this.matSnackBar.open("Se produjo un error al querer obtener la documentación. Por favor comuníquese con la terminal.", "",
                  {
                    verticalPosition: "top",
                    duration: 3000,
                    panelClass: ["error-snackbar"]
                  }
                );

                return EMPTY;
              })
            )
        ),
        map((information: IDocumentationInformation) => {
          this.documentalService.getExecSearch().next(null);

          return ({ type: "[Documental] Save Disapprove Documentation", information });
        }),
        catchError(_ => EMPTY)
    ));

    unlockInformation$ = createEffect(() => this.actions$.pipe(
        ofType("[Documental] Unlock Information"),
        mergeMap((action: { information: IDocumentationInformation }) =>
            this.documentalService.unlockInformation(action.information)),
        map(_ => ({ type: "[Documental] Save Unlock Information" })),
        catchError(_ => EMPTY)
    ));

    requestScrollToTop$ = createEffect(() => this.actions$.pipe(
        ofType("[Documental] Request List Scroll To Top"),
        mergeMap((action: { scrollable: NgScrollbar }) => {
            action.scrollable.scrollTo({ top: 0, duration: 500 });
            return of(true);
        }),
        map(() => ({ type: "[Documental] Success Request List Scroll To Top" })),
        catchError(_ => EMPTY)
    ));

    constructor(
      private readonly actions$: Actions,
      private readonly documentalService: DocumentalService,
      private readonly matSnackBar: MatSnackBar,
      private readonly store: Store,
      private readonly aesEncryptionUtilService: AESEncryptionUtilService
    ) { }
}
